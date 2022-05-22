const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize()

const Category = sequelize.define('category', {
   id_category: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   uuid_category: {
      type: DataTypes.UUID,
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