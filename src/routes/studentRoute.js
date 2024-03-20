const router = require('express').Router()
const loginController = require('../controllers/students/loginController')

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

