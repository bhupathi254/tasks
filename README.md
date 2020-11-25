# datateam task - Backend REST Service

## Application Setup
Create a file called .env with following contents
```
PORT=3000
NODE_ENV=development|staging|production
DATABASE_DIALECT={mysql|postgres|sqlite|mssql}
DATABASE_DB={DATABASE NAME}
DATABASE_USERNAME={USER NAME}
DATABASE_PASSWORD={PASSWORD}
DATABASE_HOST={HOST}
DATABASE_PORT=3306
SECRET={YOUR_STRONG_SECRET}
MAILER_SERVICE=Gmail
MAILER_SECURE=1
MAILER_PORT=25
MAILER_USER=<user_name>
MAILER_PASSWORD=<password>
```
## Running Application

- npm run dev ( *To run the application in development mode* )
- npm run debug ( *To debug the application in development mode* )
- npm start ( *To start the application in production mode* )
- npm run build-email-templates (*To build email template html*)

## How to run db migrations?

We are using sequelize as an orm. So use the following commands:
- To run the migrations use *npx sequelize-cli db:migrate*
- To undo the latest migration *npx sequelize-cli db:migrate:undo*
- To undo all the migrations *npx sequelize-cli db:migrate:undo:all*
- To run the seed *npx sequelize-cli db:seed:all*
- To undo the latest seed *npx sequelize-cli db:seed:all*
- To undo all the seeds *npx sequelize-cli db:seed:undo:all*

For more information : https://sequelize.org/v5/manual/migrations.html

## Debugging Application
Add following configuration into *launch.json* file in the Visual Studio Code to debugging the application.

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug Dev",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script",
                "debug"
            ],
            "port": 9229,
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```