
const OrderService = require('../services/order.service')
const tools = require("../utils/tools");

const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   const { date, value } = req.query
   const companyId = req.headers.company

   let where = {
      fk_id_company: companyId
   };
   // !!date ? where = { ...where, dt_created_at: tools.getFormatDate(date).getDate('YYYY-MM-DD') } : ''
   // !!value ? where = { ...where, val_price: value } : ''

   const response = await OrderService.find(where)


   if (!response) {
      return res.status(500).json('Falha ao consultar os pedidos.')
   }

   return res.status(200).json(response)
}

module.exports.create = async (req, res) => {
   let data = req.body
   const companyId = req.headers.company
   const transaction = await sequelize.transaction();

   data = {
      ...data,
      fk_id_company: companyId
   }

   const response = await OrderService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      return res.status(500).json('Falha ao criar novo pedido.')
   }

   await transaction.commit()
   return res.status(200).json(response)
}

