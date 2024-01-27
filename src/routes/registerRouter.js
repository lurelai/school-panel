const router = require('express').Router()

const teacherController = require('../controllers/teacherController')
const studentController = require('../controllers/studentController')

router.post('/teacher-register', teacherController)

router.post('/student-register', studentController)

module.exports = app => {app.use('/auth/', router)};

