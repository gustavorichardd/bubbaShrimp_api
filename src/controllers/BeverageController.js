const { Op } = require('sequelize')
const BeverageService = require('../services/beverage.service')
const CategoryService = require('../services/category.service')
const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   const { name, category } = req.query
   const companyId = req.headers.company


   //Filtra apenas as categories que forem de produto
   const responseCategories = await CategoryService.find({ fk_id_company: companyId })
   if (!responseCategories) {
      return res.status(500).json('Falha ao consultas os produtos! (01)')
   }
   const categories = responseCategories.map(category => {
      if (category.tp_category === true) return category.id_category
   }).filter(Boolean)


   // caso seja recebido dos query params, adiciona a query e filtra
   let where = {
      fk_id_company: companyId,
      fk_id_category: {
         [Op.in]: categories
      }
   };
   !!name ? where = {
      ...where,
      nm_beverage: {
         [Op.like]: `%${name}%`
      }
   } : ''
   !!category ? where = { ...where, fk_id_category: category } : ''

   const response = await BeverageService.find(where)


   if (!response) {
      return res.status(500).json('Falha ao consultas as bebidas.')
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

   const response = await BeverageService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      return res.status(500).json('Falha ao cadastrar nova bebida!')
   }

   await transaction.commit()
   return res.status(200).json(response)
}

