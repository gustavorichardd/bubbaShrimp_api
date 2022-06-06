const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/connection')

const Beverage = sequelize.define('beverage', {
   id_beverage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   uuid_beverage: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
   },
   nm_beverage: {
      type: DataTypes.STRING,
      allowNull: false
   },
   val_price: {
      type: DataTypes.FLOAT,
      allowNull: false
   },
   url_image: {
      type: DataTypes.STRING,
   },
   val_quanty: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   dt_created_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.NOW,
   },
   fk_id_category: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   fk_id_company: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
},
   {
      timestamps: false,
      tableName: 'tb_beverages'
   });

module.exports = Beverage