const Product = require('../models/tb-products')

const tools = require('../utils/tools')

exports.findByCreationDate = async (date, total) => {

   let where = {};
   !!date ? where = { ...where, dt_created_at: tools.getFormatDate(date).getDate('YYYY-MM-DD') } : ''
   !!total ? where = { ...where, val_price: total } : ''

   console.log(where)

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