const path = require('path')

const home = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/teachers/home.html'))
}

const grade = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/teachers/grade.html'))
}

module.exports = { home, grade }

