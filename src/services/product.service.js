const Product = require('../models/tb-products')



exports.findByCreationDate = async () => {
   try {
      const response = await Product.findAll()
      // console.log(response)

      return response

   } catch (err) {
      console.log(err)
      return err
   }


}