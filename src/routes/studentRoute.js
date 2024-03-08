const express = require('express')
const router = express.Router()

const path = require('path')

router.get('/home', (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/students/home.html'))
})

router.get('/grade', (req, res)=>{
    return res.sendFile(path.join(__dirname, '../../views/students/grade.html'))
})

router.get('/')

module.exports = app=>app.use('/student', router)

