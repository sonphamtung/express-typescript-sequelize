import * as bodyParser from 'body-parser';

import App from './app';
import UserController from './controllers/user-controller';

const app = new App({
    port: 5000,
    controllers: [new UserController()],
    middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true, limit: '5m' })],
});

app.listen();
