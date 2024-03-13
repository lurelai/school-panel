const router = require('express').Router()

const { home, schoolYearList, classesList, classSchema } = require('../controllers/admin/adminController')
const loginController = require('../controllers/admin/loginController')
const registerController = require('../controllers/admin/registerController')

router.get('/', home)
router.get('/Y:year', schoolYearList)
router.get('/Y:year/SY:schoolYear', classesList)
router.get('/Y:year/SY:schoolYear/C:class', classSchema)

router.post('/login', loginController)

// CRUD
router.post('/register', registerController)

module.exports = app=>app.use('/admin', router)

