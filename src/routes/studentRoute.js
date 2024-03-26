const router = require('express').Router()

// Controllers
const loginController = require('../controllers/students/loginController')
const { yearsListController, gradeListController } = require('../controllers/students/studentController')


// Middlewares
const loginRequired = require('../middlewares/loginRequired')

router.get('/', loginRequired, yearsListController)
router.get('/:year', loginRequired, gradeListController)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

