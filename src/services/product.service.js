const Product = require('../models/tb-products')
const AWS = require('aws-sdk')
const tools = require('../utils/tools')
const uploadFile = require('../utils/uploadFileAWS')


exports.findByCreationDate = async (date, total, companyId) => {

   let where = {
      fk_id_company: companyId
   };
   !!date ? where = { ...where, dt_created_at: tools.getFormatDate(date).getDate('YYYY-MM-DD') } : ''
   !!total ? where = { ...where, val_price: total } : ''

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

exports.createProduct = async (data, file, companyId) => {
   const trx = await Product.sequelize.transaction();

   data = {
      ...data,
      fk_id_company: companyId
   }


   console.log(file.filename + '__' + file.originalname)
   console.log(data, file)

   // const upload = await uploadFile('teasdste.txt', 'asdasdasdasdasda')



   // try {
   //    const response = await Product.create(data, {
   //       transacion: trx
   //    })

   //    trx.commit()
   //    return response


   // } catch (err) {
   //    console.log(err)
   //    return err
   // }

   return false

}