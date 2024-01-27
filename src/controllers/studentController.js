const create = require('../services/studentService')

const studentController = (req, res)=>{
    create(req.body)

    res.send(req.body)
}

module.exports = studentController

