
const ProductService = require('../services/product.service')

module.exports.index = async (req, res) => {
   const { date, value } = req.query

   const response = await ProductService.findByCreationDate(date, value)

   return res.status(200).json(response)
}