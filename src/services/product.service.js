const Product = require('../models/tb-products')



exports.index = async () => {
   try {
      // const response = await Product.findOne()

      const response = 2
      // console.log(response)

      return response

   } catch (err) {
      console.log(err)
      return err
   }


}