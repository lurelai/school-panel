const Teacher = require('../models/teacherModel')

const createNewTeacher = async body => {
    try{
        let theNewTeacher = await Teacher.create(body)
        return theNewTeacher
    }
    catch(err){
        console.log(err)
        return err
    }
}

module.exports = createNewTeacher;

