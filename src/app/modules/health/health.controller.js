const {business} = require('../dados/dados.business')

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class healthCheck {

    static async healthCheck(req, res) {

        console.log("health check init.")

        try {

            let dadosCriados = {"funcional":"true"}

            return res.status(200).json(dadosCriados)

        } catch (error) {

            return res.status(error.code).send(error.message)
        }
    }

    static async criaDados(req, res) {

        console.log("Criando dado.")

        try {

           const {dados} = req.body
           
           if(!dados) return res.status(400).send("Parâmetros não enviados.")

            let dadosCriados = await business.criaDados(dados)

            return res.status(201).json(dadosCriados)

        } catch (error) {
            console.log(error)

            return res.status(error.code).send(error.message)
        }
    }

}

module.exports = healthCheck
