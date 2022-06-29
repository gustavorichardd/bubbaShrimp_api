const Sequelize = require('sequelize');
let db = {};
require('dotenv').config()
const _ = require('lodash');

let seqConfig = {
   host: process.env.BUBBA_HOST,
   dialect: "mariadb",
   operatorsAliases: '0',
   dialectOptions: {
      connectTimeout: 5000,

   },
   pool: {
      max: 5,
      min: 0,
      acquire: 120000,
      idle: 120000,
      evict: 120000
   }
};

// Conectando ao banco de dados
let sequelize = new Sequelize(process.env.BUBBA_DB, process.env.BUBBA_USER, process.env.BUBBA_PASSWORD, seqConfig);

// testando a conexáo
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
