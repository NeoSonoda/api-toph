//const {repositorio} = require('./dados.repository')
const { errors } = require('../../services/error')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
async function criaDados(dados){

    try {

        console.log(dados)
        const dadosCriados = await repositorio.create(dados)

        if (!dadosCriados) {

            throw errors.notFound()
        }

        return dadosCriados

    } catch (error) {

        throw error
    }
}

async function pegaDados() {

    try {

        const dadosEncontrados = await repositorio.find()

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}

async function  pegaDadosPorId(id) {

    try {

        const dadosEncontrados = await repositorio.findByPK(id)

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}

async function pegaDadosPorUsuarioId(usuarioId) {

    try {

        const dadosEncontrados = await repositorio.find({usuarioId})

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}

exports.business = { pegaDadosPorUsuarioId, pegaDadosPorId, pegaDados, criaDados }