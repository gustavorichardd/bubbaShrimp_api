
const AddressService = require('../services/address.service')
const { sequelize } = require('../config/connection')

module.exports.create = async (req, res) => {
   let data = req.body
   const transaction = await sequelize.transaction();

   const response = await AddressService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      return res.status(500).json('Falha ao criar novo endereço.')
   }

   await transaction.commit()
   return res.status(200).json(response)
}

