const path = require('path')

const home = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/students/home.html'))
}

const grade = (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/students/grade.html'))
}

module.exports = { home, grade }
