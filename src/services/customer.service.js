const Customer = require('../models/tb-customers')
/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await Customer.findAll({
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
      const response = await Customer.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}