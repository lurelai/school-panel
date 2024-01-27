const Teacher = require('../models/teacherModel')

const createNewTeacher = async body => {
    try{
        await Teacher.create(body)
        return 'okay'
    }
    catch(err){
        console.log(err)
        return err
    }
}

module.exports = createNewTeacher;

