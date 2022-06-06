
const BeverageService = require('../services/beverage.service')
const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   const { name, category } = req.query
   const companyId = req.headers.company


   let where = {
      fk_id_company: companyId
   };
   !!name ? where = { ...where, nm_beverage: name } : ''
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

