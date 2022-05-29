const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection')

const Product = sequelize.define('product', {
   id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   uuid_product: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
   },
   nm_product: {
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
   val_weight: {
      type: DataTypes.FLOAT,
      allowNull: false
   },
   dt_created_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.NOW,
   },
   fk_id_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      tableName: 'tb_products'
   });

module.exports = Product