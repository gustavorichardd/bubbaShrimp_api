const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection')
const Address = require('./tb-addresses')

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


// Company.belongsTo(Address)
// Address.belongsTo(Company)
Company.hasMany(Address, { as: 'teste2' })



// sequelize.ass



module.exports = Company