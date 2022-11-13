const express = require('express')
const router = express.Router()

const healthCheckController = require('./health.controller')

//rotas (chamam a função dentro da controller de dados)
//Para acesso: http://localhost:8080/v1/health

router.get('/check', healthCheckController.healthCheck)
router.post('/check', healthCheckController.healthTestCheck)

module.exports = router