
const ProductService = require('../services/product.service')



module.exports.find = async (req, res) => {
   const { date, value } = req.query
   const companyId = req.headers.company

   const response = await ProductService.findByCreationDate(date, value, companyId)

   return res.status(200).json(response)
}

module.exports.create = async (req, res) => {

   const data = req.body
   const companyId = req.headers.company
   const file = req.file


   const response = await ProductService.createProduct(data, file, companyId)

   return res.status(200).json('response')
}