const User = require('../models/tb-users')
/**
* @Param - where - dados da consulta
 */
exports.find = async (where) => {
   try {
      const response = await User.findAll({
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
      const response = await User.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}