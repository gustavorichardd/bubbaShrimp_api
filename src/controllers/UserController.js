const UserService = require('../services/user.service')
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
   let data = req.body
   console.log(data)
   const companyId = req.headers.company
   const transaction = await sequelize.transaction();

   data = {
      ...data,
      fk_id_company: companyId
   }

   const response = await UserService.create(data, transaction)

   if (!response) {
      await transaction.rollback()
      res.status(500).json('Falha ao cadastrar novo usuário.')
   }

   transaction.commit()
   res.status(200).json(response)
}