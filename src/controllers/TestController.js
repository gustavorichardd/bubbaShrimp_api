
const testService = require('../services/test.service')

module.exports.index = async (req, res) => {

   const teste =
      testService.teste({ teste: 123, sucesso: "ok" })


   return res.status(200).json(teste)
}