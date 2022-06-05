const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({
   dialect: "mariadb",
   database: process.env.BUBBA_DB,
   username: process.env.BUBBA_USER,
   password: process.env.BUBBA_PASSWORD,
   host: process.env.BUBBA_HOST,
   port: process.env.BUBBA_PORT,
});

module.exports = sequelize;