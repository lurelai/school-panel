const express = require('express')
const router = express.Router()

// controllers
const { home, grade } = require('../controllers/studentController')

router.get('/home', home)
router.get('/home/:grade', grade)

module.exports = app=>app.use('/student', router)

