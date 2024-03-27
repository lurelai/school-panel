const router = require('express').Router()

// Controllers
const loginController = require('../controllers/students/loginController')
const { yearsListController, gradeListController } = require('../controllers/students/studentController')
const { studentRequired } = require('../middlewares/typeUserRequired')


// Middlewares
const loginRequired = require('../middlewares/loginRequired')

router.get('/', loginRequired, studentRequired, yearsListController)
router.get('/:year', loginRequired, studentRequired, gradeListController)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

