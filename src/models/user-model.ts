import { DataTypes, Sequelize } from 'sequelize';
import { UserStatic } from '../types/api';

module.exports = function (sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
};
