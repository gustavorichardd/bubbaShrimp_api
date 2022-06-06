const Order = require('../models/tb-orders')
/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await Order.findAll({
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
      const response = await Order.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}