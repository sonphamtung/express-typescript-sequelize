import * as express from 'express';

import { Application } from 'express';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any; controllers: any }) {
        this.app = express();
        this.port = appInit.port;

        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
        controllers.forEach((controller) => {
            this.app.use(controller.path, controller.router);
        });
    }

    private assets() {
        if (process.env.NODE_ENV === 'production') {
            this.app.use(require('helmet')());
            this.app.use(require('compression')());
        } else {
            this.app.use(require('cors')());
        }
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
