const path = require('path')
const { adminRead } = require('../../services/readService')

const home = async (req, res)=>{
    const { result } = await adminRead({})

    const years = result.map(e=>{ return e['year'] })

    return res.render('admin/home', {years})
}

const schoolYearList = async (req, res)=>{
    const { year } = req.params
    const { result } = await adminRead({ year })

    if(result.length === 0)
        return res.send("This year don't exist")

    const schoolYears = result.map(e=>{return e['school_years'].split(' ')})

    return res.render('admin/school-year-list', { schoolYears, page: req.originalUrl})
}

const classesList = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../../views/admin/classes-list.html'))
}

const classSchema = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../../views/admin/class-schema.html'))
}

module.exports = { home, schoolYearList, classesList, classSchema }

