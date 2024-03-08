const express = require('express')
const router = express.Router()

// controllers
const { home, grade } = require('../controllers/studentController')

router.get('/', home)
router.get('/:grade', grade)

module.exports = app=>app.use('/student', router)

