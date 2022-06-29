const CompanyService = require('../services/company.service')
const AddressService = require('../services/address.service')
const { sequelize } = require('../config/connection')

module.exports.find = async (req, res) => {
   // const companyId = req.headers.company

   // const response = await CategoryService.find({ fk_id_company: companyId })

   // if (!response) {
   //    await transaction.rollback()
   //    res.status(500).json('Falha ao consultar as categorias.')
   // }

   // return res.status(200).json(response)
}
module.exports.create = async (req, res) => {
   let { company_data, company_address } = req.body

   company_address = {
      ...company_address,
      address_zipcode: company_address.address_zipcode.trim().replace('-', '')
   }

   const transaction = await sequelize.transaction();
   const responseAddress = await AddressService.create(company_address, transaction)

   if (!responseAddress) {
      await transaction.rollback()
      res.status(500).json('Falha ao cadastrar nova companhia. 01')
   }

   let data = {
      ...company_data,
      fk_id_addr_company: responseAddress.dataValues.id_address
   }

   const response = await CompanyService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      res.status(500).json('Falha ao cadastrar nova companhia. 02')
   }

   transaction.commit()
   res.status(200).json(response)
}