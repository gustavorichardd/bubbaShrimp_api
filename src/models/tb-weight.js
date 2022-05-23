const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize()

const Weight = sequelize.define('weight', {
   id_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
   },
   nm_weight: {
      type: DataTypes.STRING,
      allowNull: false
   }
},
   {
      timestamps: false,
      tableName: 'tb_weight'
   });

module.exports = Weight