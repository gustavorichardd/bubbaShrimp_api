const Product = require('../models/tb-products')
/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await Product.findAll({
         where
      })
      return response
   } catch (err) {
      console.log(err)
      return err
   }
}

exports.create = async (data, transaction) => {
   try {
      const response = await Product.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return err
   }
}