const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
class TypeController {
    /*Я делаю асинхронную функцию create для того что бы,
     в постмэне делапть post и передавать в него новый тип name с каким-то типом данным. */
    async create (req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type) // в итоге нам воззвращается объект, в виде json файла.
    }

    async getAll (req, res) {
        const types = await Type.findAll()
        return res.json(types) // возвращает все существующие записи которые есть в БД.
    }

    async delete (req, res) {

    }
}

module.exports = new TypeController()