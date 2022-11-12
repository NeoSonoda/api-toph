const express = require('express')
const router = express.Router()

const healthCheckController = require('./health.controller')

//rotas (chamam a função dentro da controller de dados)
//Para acesso: http://localhost:3000/v1/dados

router.get('/check', healthCheckController.healthCheck)

module.exports = router