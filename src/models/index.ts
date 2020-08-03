import { Sequelize, DataTypes } from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';

import envConfigs from '../config/config';

const config = envConfigs['env'];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

interface IModals {
    [key: string]: any;
}
const models: IModals = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== path.basename(__filename) && (file.slice(-3) === '.ts' || file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        models[model.name] = model;
    });

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
