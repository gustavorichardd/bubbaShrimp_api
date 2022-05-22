
const ProductService = require('../services/product.service')

module.exports.index = async (req, res) => {

   const response = ProductService.index()


   return res.status(200).json({ response })
}