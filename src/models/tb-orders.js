const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/connection')

const Order = sequelize.define('order', {
   id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   uuid_order: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
   },
   fk_id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   fk_id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   qnt_product: {
      type: DataTypes.INTEGER,
   },
   val_descount: {
      type: DataTypes.FLOAT,
      allowNull: false
   },
   desc_payment: {
      type: DataTypes.STRING
   },
   dt_created_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.NOW,
   },
   fk_id_company: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
},
   {
      timestamps: false,
      tableName: 'tb_orders'
   });

module.exports = Order