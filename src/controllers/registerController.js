const createNewTeacher = require('../services/registerService')

const registerController = (req, res)=>{
    console.log(createNewTeacher(req.body)) 
    res.json(req.body)
}

module.exports = registerController;

