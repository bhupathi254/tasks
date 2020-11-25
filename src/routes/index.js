import basicRoute from "../routes/basic.route";

const initializeRoutes = (app) => {
    app.use('/api/type', basicRoute);
};

export default {
    initializeRoutes
};