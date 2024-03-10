const express = require('express')
const router = express.Router()

// controllers
const { home, grade } = require('../controllers/student/studentController')
const loginController = require('../controllers/student/loginController')

router.get('/', home)
router.get('/:grade', grade)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

