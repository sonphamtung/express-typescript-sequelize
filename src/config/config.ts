import { Dialect } from 'sequelize';
// export default {
//     development: {
//         username: 'root',
//         password: null,
//         database: 'database_development',
//         host: '127.0.0.1',
//         dialect: 'mysql',
//     },
//     test: {
//         username: 'root',
//         password: null,
//         database: 'database_test',
//         host: '127.0.0.1',
//         dialect: 'mysql',
//     },
//     production: {
//         username: 'root',
//         password: null,
//         database: 'database_production',
//         host: '127.0.0.1',
//         dialect: 'mysql',
//     },
// };

export default {
    env: {
        username: 'postgres',
        password: '1234',
        database: 'measuredskills',
        host: 'localhost',
        dialect: 'postgres' as Dialect,
        port: 5433,
    },
};
