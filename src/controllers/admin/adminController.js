const path = require('path')
const { adminRead } = require('../../services/readService')

const home = async (req, res)=>{
    const result = await adminRead({year: 2024})

    return res.send(result)
    // return res.sendFile(path.join(__dirname, '../../../views/admin/home.html'))
}

const schoolYearList = async (req, res)=>{

    return res.send(result)

    //return res.sendFile(path.join(__dirname, '../../../views/admin/school-year-list.html'))
}

const classesList = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../../views/admin/classes-list.html'))
}

const classSchema = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../../views/admin/class-schema.html'))
}

module.exports = { home, schoolYearList, classesList, classSchema }

