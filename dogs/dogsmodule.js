const db = require('../data/dbConfig.js');

module.exports = {
    add,
    get,
    remove,
    modify
}

function add(request) {
    return db('dogs').insert(request)
}

function get() {
    return db('dogs')
}

function getById(id) {
    return db('dogs').where({ id: id })
}

function remove(id) {
    return db('dogs').where({ id: id }).del()
}

async function modify(id, request) {
    const conditional = await db('dogs').where('id', Number(id)).update(request)
    if (conditional) {
    return getById(id)}
    else {return null}}