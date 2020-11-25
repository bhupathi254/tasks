import '@babel/polyfill';
import express from 'express';
import errorHandler from './src/middlewares/error-handling.middleware';
import routes from './src/routes';
import ResponseHelper from './src/helpers/response.helper';
import { scopePerRequest } from 'awilix-express';
import container from './src/helpers/dependency-container.helper';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import path from 'path';
const swaggerDocument = require('./docs/swagger.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
new ResponseHelper().init(app);
app.use(scopePerRequest(container));
app.use((req, res, next) => {
    // create a scoped container
    req.scope = container.createScope();
    next();
});
const opts = {
    explorer: false,
    swaggerOptions: {
        validatorUrl: null
    },
    customSiteTitle: 'datateam task - Backend REST Service',
    customfavIcon: 'https://www.xyz.com/favicon/16x16.png'
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, opts));

app.get('/', (req, res) => {
    res.redirect('/docs');
});
app.use("/uploads", express.static(path.join(__dirname, 'public/uploads')));
app.use(cors());
routes.initializeRoutes(app);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening to ${port} ...`)
    console.log('Press Ctrl+C to quit.')
});