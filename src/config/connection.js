const Sequelize = require('sequelize');
let db = {};
require('dotenv').config()
const _ = require('lodash');

let seqConfig = {
   host: process.env.BUBBA_HOST,
   dialect: "postgres",
   operatorsAliases: '0',
   dialectOptions: {
      connectTimeout: 5000,
      ssl: {
         require: true, // This will help you. But you will see nwe error
         rejectUnauthorized: false // This line will fix new error
      }
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

// Deixar o sequelize.sync() comentado, apenas rodar ele caso o banco de dados esteja em branco.
// sequelize.sync()

// testando a conexáo
sequelize
   .authenticate()
   .then(onDbSuccess)
   .catch(ErrorAuthenticateDb);

function onDbSuccess() {
   console.log('Connected to database, dialect', seqConfig.dialect);
}

function ErrorAuthenticateDb(e) {
   console.log('Error trying to connect to Database', seqConfig.dialect, e);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = _.extend({
   Sequelize: Sequelize,
   sequelize: sequelize
}, db);
