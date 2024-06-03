const router = require('express').Router()
const studentController = require('../controllers/student-controller')

router.get('/', studentController)

module.exports = app=>app.use('/student', studentController)

