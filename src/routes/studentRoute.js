const router = require('express').Router()

const loginController = require('../controllers/students/loginController')
const { yearsList, schoolYearAndClassList, gradeList } = require('../controllers/students/studentController')
const createCookieMiddleware = require('../middlewares/createCookieMiddleware')

router.get('/', createCookieMiddleware, yearsList)
router.get('/:year', createCookieMiddleware, schoolYearAndClassList)
router.get('/:year/:schoolYearAndClass', createCookieMiddleware, gradeList)

router.post('/login', loginController)

module.exports = app=>app.use('/student', router)

