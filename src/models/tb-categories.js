const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

const Category = sequelize.define('category', {
   id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
   uuid_category: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,

   },
   tp_category: {
      type: DataTypes.BOOLEAN,
      allowNull: false
   },
   nm_category: {
      type: DataTypes.STRING,
      allowNull: false
   },
   fk_id_company: {
      type: DataTypes.INTEGER,
      allowNull: false
   },

},
   {
      timestamps: false,
      tableName: 'tb_categories'
   });

module.exports = Category