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

    static async healthTestCheck(req, res) {

        console.log("health test check init.")

        try {

            let dadosCriados = {"funcional":"true"}

            return res.status(200).json(dadosCriados)

        } catch (error) {

            return res.status(error.code).send(error.message)
        }
    }

}

module.exports = healthCheck
