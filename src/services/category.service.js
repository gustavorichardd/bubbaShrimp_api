const Category = require('../models/tb-categories')

/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await Category.findAll({
         where
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}

exports.create = async (data, transaction) => {
   try {
      const response = await Category.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}