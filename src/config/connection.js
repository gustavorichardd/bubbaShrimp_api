const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({
   dialect: "mariadb",
   database: process.env.BUBBA_DB,
   username: process.env.BUBBA_USER,
   password: process.env.BUBBA_PASSWORD,
   host: process.env.BUBBA_HOST,
   port: process.env.BUBBA_PORT,
   // dialectOptions: {
   //    ssl: {
   //       require: true,
   //       rejectUnauthorized: false
   //    }
   // },
});

// const sequelize = new Sequelize(process.env.BUBBA_DB, process.env.BUBBA_USER, process.env.BUBBA_PASSWOR, {
//    host: '127.0.0.1',
//    dialect: 'mariadb'
// });


// try {
//    sequelize.authenticate().then(() => console.log('Connection has been established successfully.'));

// } catch (error) {
//    console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;