const createNewTeacher = require('../services/teacherService')

const teacherController = (req, res)=>{
    if( !req.body.name || !req.body.age || !req.body.password ){
        res.status(400).send('Fail')
    }

    createNewTeacher(req.body)

    res.json(req.body)
}

module.exports = teacherController;

