
const ProductService = require('../services/product.service')
const tools = require("../utils/tools");

const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   const { date, value } = req.query
   const companyId = req.headers.company


   let where = {
      fk_id_company: companyId
   };
   !!date ? where = { ...where, dt_created_at: tools.getFormatDate(date).getDate('YYYY-MM-DD') } : ''
   !!value ? where = { ...where, val_price: value } : ''

   const response = await ProductService.find(where)


   if (!response) {
      return res.status(500).json('Falha ao consultas os produtos!')
   }

   return res.status(200).json(response)
}

module.exports.create = async (req, res) => {
   let data = req.body
   const companyId = req.headers.company

   const transaction = await sequelize.transaction();

   data = {
      ...data,
      dt_created_at: sequelize.fn('NOW'),
      fk_id_company: companyId
   }

   const response = await ProductService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      return res.status(500).json('Falha ao criar novo produto!')
   }

   await transaction.commit()
   return res.status(200).json(response)
}

