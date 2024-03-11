const router = require('express').Router()

const { home, schoolYearList, classesList, classSchema } = require('../controllers/admin/adminController')
const loginController = require('../controllers/admin/loginController')
const registerController = require('../controllers/admin/registerController')

router.get('/', home)
router.get('/:year', schoolYearList)
router.get('/:year/:schoolYear', classesList)
router.get('/:year/:schoolYear/:class', classSchema)

router.post('/login', loginController)
router.post('/register', registerController)

module.exports = app=>app.use('/admin', router)

