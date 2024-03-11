const router = require('express').Router()

const { home, grade } = require('../controllers/teacher/teacherController')
const loginController = require('../controllers/teacher/loginController')
const registerController = require('../controllers/teacher/registerController')

router.get('/', home)
router.get('/:grade', grade)

router.post('/login', loginController)
router.post('/register', registerController)

module.exports = app=>app.use('/teacher', router)

