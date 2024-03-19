const router = require('express').Router()
const studentController = require('../controllers/studentController')


router.get('/', studentController)

module.exports = app=>app.use('/student', router)

