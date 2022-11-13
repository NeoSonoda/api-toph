const { Dados } = require('../../../../models/index')

async function create(dados){

    return await Dados.create(dados)
}

async function update(dadosId, dados){

    return await Dados.update(dados, { where: { id: dadosId } })
}

async function deletes (dadosId){

    return await Dados.destroy({ where: { id: dadosId } })
}

async function find (filter){

    return await Dados.findAll(filter)
}

async function findByPK(id) {

    return await Dados.findByPk(id)
}

async function findOne(filter){

    return await Dados.findOne({ where: { filter } })
}

exports.repositorio = { create, update, deletes, find, findByPK, findOne }