const router = require('express').Router()

const loginController = require('../controllers/students/loginController')
const { yearsList } = require('../controllers/students/studentController')

router.get('/', yearsList)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

