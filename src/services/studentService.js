const Student = require('../models/studentModel')

const create = async (body)=>{
    try{
        await Student.create(body)
        return 'okay'
    }catch(err){
        console.log(err)
    }
}

module.exports = create;

