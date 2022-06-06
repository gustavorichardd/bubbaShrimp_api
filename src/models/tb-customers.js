const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/connection')

const Customer = sequelize.define('customer', {
   id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   uuid_customer: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
   },
   doc_num: {
      type: DataTypes.STRING,
      allowNull: false
   },
   nm_customer: {
      type: DataTypes.STRING,
      allowNull: false
   },
   dt_birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
   },
   num_phone: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email_customer: {
      type: DataTypes.STRING,
      allowNull: false
   },
   fk_id_address: {
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
      tableName: 'tb_customers'
   });

module.exports = Customer