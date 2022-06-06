const Beverage = require('../models/tb-beverages')

/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await Beverage.findAll({
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
      const response = await Beverage.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}

