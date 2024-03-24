const router = require('express').Router()

const loginController = require('../controllers/students/loginController')
const { yearsList, schoolYearAndClassList, gradeList } = require('../controllers/students/studentController')

router.get('/', yearsList)
router.get('/:year', schoolYearAndClassList)
router.get('/:year/:schoolYearAndClass', gradeList)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

