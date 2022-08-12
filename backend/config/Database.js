import { Sequelize } from "sequelize";

const db = new Sequelize('siberat_auth_react', 'hendraws', 'hendraws', {
    host: "localhost",
    dialect: "mysql"
});

export default db;