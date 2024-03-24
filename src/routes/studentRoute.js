const router = require('express').Router()

const loginController = require('../controllers/students/loginController')
const { yearsList, schoolYearAndClassList, gradeList } = require('../controllers/students/studentController')
const createStudentCookie = require('../controllers/middlewares/createStudentCookie')

router.get('/', createStudentCookie, yearsList)
router.get('/:year', createStudentCookie, schoolYearAndClassList)
router.get('/:year/:schoolYearAndClass', createStudentCookie, gradeList)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

