const Company = require('../models/tb-companies')
const Address = require('../models/tb-addresses')


exports.find = async (where) => {
   try {
      const response = await Company.findOne({
         where,
         include: [{
            model: Address,
            require: true
         }]
      })

      return response
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