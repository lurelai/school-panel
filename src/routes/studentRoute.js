const router = require('express').Router()
const { loginController } = require('../controllers/studentController')

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

