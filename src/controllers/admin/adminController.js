const path = require('path')
const { adminRead } = require('../../services/readService')


// Home
const home = async (req, res)=>{
    const { result } = await adminRead({})
    const years = result.map(e=>{ return e['year'] })

    return res.render('admin/home', {years})
}


// School year list
const schoolYearList = async (req, res)=>{
    const { year } = req.params

    if(isNaN(year))
        return res.send("The year param needs to be number")

    const { result } = await adminRead({ year })

    if(result.length === 0)
        return res.send("This year don't exist")

    const schoolYears = result.map(e=>{return e['school_years'].split(' ')})
    return res.render('admin/school-year-list', { schoolYears })
}


// Class list
const classesList = async (req, res)=>{
    const { year, schoolYear } = req.params

    if(isNaN(year))
        return res.send("The year param needs to be number")

    const { result } = await adminRead({year, schoolYear})

    if(result.length === 0)
        return res.send("This school-year don't exist, comeback to /admin and try again")

    const classes = result.map(e=>{ return e['class'] })
    return res.render('admin/classes-list', { classes })
}


// Class schema
const classSchema = async (req, res)=>{
    const { year, schoolYear, classI } = req.params

    if(isNaN(year))
        return res.send("The year param needs to be number")

    const { result } = await adminRead({year, schoolYear, classI})

    return res.sendFile(path.join(__dirname, '../../../views/admin/class-schema.html'))
}

module.exports = { home, schoolYearList, classesList, classSchema }

