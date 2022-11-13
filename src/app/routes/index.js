const dadosRoute = require('../modules/dados/dados.route')
const usuarioRoute = require('../modules/usuarios/usuarios.route')
const healthCheck = require('../modules/health/health.route')

module.exports = app => {

    app
        .use('/v1/dados', dadosRoute)
        .use('/v1/health', healthCheck)
        .use('/v1/usuarios', usuarioRoute)
}