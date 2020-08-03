import * as express from 'express';
import { Request, Response } from 'express';

import IControllerBase from '../interfaces/controller-base.interface';
import model from '../models';

class HomeController implements IControllerBase {
    public path = '/user';
    private router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/', this.getListUser);
    }

    async getListUser(req: Request, res: Response) {
        try {
            const user = await model.User.findAll();
            return res.json({
                message: user,
            });
        } catch (error) {
            return;
        }
    }
}

export default HomeController;
