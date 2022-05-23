const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize()

const Company = sequelize.define('company', {
   id_company: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
   },
   nm_company: {
      type: DataTypes.STRING,
      allowNull: false
   },
   addr_company: {
      type: DataTypes.STRING,
      allowNull: false
   },

},
   {
      timestamps: false,
      tableName: 'tb_companies'
   });

module.exports = Company