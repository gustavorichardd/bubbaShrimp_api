const Address = require('../models/tb-addresses')

exports.create = async (data, transaction) => {
   try {
      const response = await Address.create(data, {
         transaction
      })
      return response
   } catch (err) {
      console.log(err)
      return false
   }
}

