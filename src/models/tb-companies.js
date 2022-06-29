const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/connection')

const Company = sequelize.define('company', {
   id_company: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   nm_company: {
      type: DataTypes.STRING,
      allowNull: false
   },
   fk_id_addr_company: {
      type: DataTypes.INTEGER,
      allowNull: false
   },

},
   {
      timestamps: false,
      tableName: 'tb_companies'
   });

module.exports = Company