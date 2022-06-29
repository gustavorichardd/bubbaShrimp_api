const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/connection')

const Users = sequelize.define('user', {
   id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nm_user: {
      type: DataTypes.STRING,
      allowNull: false
   },
   contact_user: {
      type: DataTypes.STRING,
      allowNull: false
   },
   tp_user: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
   },
   fk_id_company: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
},
   {
      timestamps: false,
      tableName: 'tb_users'
   });

module.exports = Users