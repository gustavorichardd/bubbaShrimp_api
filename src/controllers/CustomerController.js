const { Op } = require('sequelize')
const CustomerService = require('../services/customer.service')
const AddressService = require('../services/address.service')
const tools = require("../utils/tools");
const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   const { name, neighbourhood } = req.query
   const companyId = req.headers.company

   //tratando as consultas
   let where = {
      fk_id_company: companyId,
   };
   !!name ? where = {
      ...where,
      nm_customer: {
         [Op.like]: `%${name}%`
      }
   } : ''


   //Verifica se está filtrado pelo bairro
   if (!!neighbourhood) {
      console.log(neighbourhood)
      const idAddress = await AddressService.find({
         address_neighbourhood: neighbourhood
      })

      if (!idAddress) {
         res.status(500).json('Falha ao consultar os clientes. (01)')
      }
      console.log(idAddress)
      where = {
         ...where,
         fk_id_address: idAddress.dataValues.id_address
      }
   }

   const response = await CustomerService.find(where)

   if (!response) {
      await transaction.rollback()
      res.status(500).json('Falha ao consultar os clientes. (02)')
   }

   return res.status(200).json(response)
}
module.exports.create = async (req, res) => {
   let { customer_data, customer_address } = req.body
   const companyId = req.headers.company

   customer_address = {
      ...customer_address,
      address_zipcode: customer_address.address_zipcode.trim().replace('-', '')
   }

   const transaction = await sequelize.transaction();
   const responseAddress = await AddressService.create(customer_address, transaction)

   if (!responseAddress) {
      await transaction.rollback()
      res.status(500).json('Falha ao cadastrar novo cliente. 01')
   }

   let data = {
      ...customer_data,
      doc_num: customer_data.doc_num.trim().replace(".", '').replace('.', '').replace('-', ''),
      dt_birthday: tools.getFormatDate(customer_data.dt_birthday).getDate('YYYY-MM-DD'),
      fk_id_company: companyId,
      fk_id_address: responseAddress.dataValues.id_address
   }

   const response = await CustomerService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      res.status(500).json('Falha ao cadastrar novo cliente. 02')
   }

   transaction.commit()
   res.status(200).json(response)
}