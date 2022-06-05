// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//    dialect: "mariadb",
//    database: process.env.BUBBA_DB,
//    username: process.env.BUBBA_USER,
//    password: process.env.BUBBA_PASSWORD,
//    host: process.env.BUBBA_HOST,
//    port: process.env.BUBBA_PORT,
// });

// module.exports = sequelize;


const Sequelize = require('sequelize');
let db = {};
require('dotenv').config()
const _ = require('lodash');

//acquire = This needs to be fairly high to account for a serverless db spinup

// UTC ---->>>> https://github.com/sequelize/sequelize/issues/854
// mudando direto na amazon https://sa-east-1.console.aws.amazon.com/rds/home?region=sa-east-1#parameter-groups-detail:ids=cityfoods;type=DbParameterGroup;editing=false
// https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
//https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.LocalTimeZone

let seqConfig = {
   host: process.env.BUBBA_HOST,
   dialect: "mariadb",
   operatorsAliases: '0',
   dialectOptions: {
      connectTimeout: 60000,

   },
   pool: {
      max: 5,
      min: 0,
      acquire: 120000,
      idle: 120000,
      evict: 120000
   }
};

// Connecting to database
let sequelize = new Sequelize(process.env.BUBBA_DB, process.env.BUBBA_USER, process.env.BUBBA_PASSWORD, seqConfig);

sequelize
   .authenticate()
   .then(onDbSuccess)
   .catch(ErrorAuthenticateDb);


function onDbSuccess() {
   console.log('Connected to MySQL');
}

function ErrorAuthenticateDb(e) {
   console.log('Error trying to connect to MySQL', e);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = _.extend({
   Sequelize: Sequelize,
   sequelize: sequelize
}, db);
