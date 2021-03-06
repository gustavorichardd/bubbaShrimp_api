const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection')

const Address = sequelize.define('address', {
   id_address: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   address_zipcode: {
      type: DataTypes.STRING,
      allowNull: false
   },
   address_lgr: {
      type: DataTypes.STRING,
      allowNull: false
   },
   address_num: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   address_neighbourhood: {
      type: DataTypes.STRING,
      allowNull: false
   },
   address_city: {
      type: DataTypes.STRING,
      allowNull: false
   },
   address_state: {
      type: DataTypes.STRING,
      allowNull: false
   },

},
   {
      timestamps: false,
      tableName: 'tb_addresses'
   });

module.exports = Address