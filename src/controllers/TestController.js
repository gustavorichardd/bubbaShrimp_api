
const testService = require('../services/test.service')

module.exports.index = async (req, res) => {

   const teste =
      testService.teste({ teste: 123, sucesso: "ok" })
   // testService.teste('Qualquer dado que for enviado pelo controller, ')


   return res.status(200).json(teste)
}