const router = require('express').Router()

const loginController = require('../controllers/students/loginController')
const { yearsList, gradeList } = require('../controllers/students/studentController')

router.get('/', yearsList)
router.get('/:year', gradeList)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

