const router = require('express').Router()

const { home, grade } = require('../controllers/teacher/teacherController')
const loginController = require('../controllers/teacher/loginController')

router.get('/', home)
router.get('/:grade', grade)

router.post('/login', loginController)

module.exports = app=>app.use('/teacher', router)

