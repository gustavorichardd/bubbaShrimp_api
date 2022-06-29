const { Op } = require('sequelize')

const ProductService = require('../services/product.service')
const CategoryService = require('../services/category.service')
const { sequelize } = require('../config/connection')
const tools = require("../utils/tools");

module.exports.find = async (req, res) => {
   const { date, value } = req.query
   const companyId = req.headers.company

   //Filtra apenas as categories que forem de produto
   const responseCategories = await CategoryService.find({ fk_id_company: companyId })
   if (!responseCategories) {
      return res.status(500).json('Falha ao consultas os produtos! (01)')
   }
   const categories = responseCategories.map(category => {
      if (category.tp_category === false) return category.id_category
   }).filter(Boolean)

   // caso seja recebido dos query params, adiciona a query e filtra
   let where = {
      fk_id_company: companyId,
      fk_id_category: {
         [Op.in]: categories
      }
   };
   !!date ? where = { ...where, dt_created_at: tools.getFormatDate(date).getDate('YYYY-MM-DD') } : ''
   !!value ? where = { ...where, val_price: value } : ''

   const response = await ProductService.find(where)


   if (!response) {
      return res.status(500).json('Falha ao consultas os produtos! (02)')
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

