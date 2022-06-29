const Company = require('../models/tb-companies')


exports.find = async (where) => {
   try {
      // const response = await Customer.findAll({
      //    where
      // })
      // return response
   } catch (err) {
      console.log(err)
      return false
   }
}

exports.create = async (data, transaction) => {
   try {
      const response = await Company.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}