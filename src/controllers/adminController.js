const path = require('path')

const home = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/admin/home.html'))
}

const schoolYearList = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/admin/school-year-list.html'))
}

const classesList = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/admin/classes-list.html'))
}

const classSchema = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/admin/class-schema.html'))
}

module.exports = { home, schoolYearList, classesList, classSchema }

