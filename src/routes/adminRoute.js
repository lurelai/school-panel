const router = require('express').Router()

const { home, schoolYearList, classesList, classSchema } = require('../controllers/admin/adminController')
const loginController = require('../controllers/admin/loginController')
const registerController = require('../controllers/admin/registerController')
const readController = require('../controllers/admin/readController')

router.get('/', home)
router.get('/Y:year', schoolYearList)
router.get('/Y:year/:schoolYear', classesList)
router.get('/Y:year/:schoolYear/:class', classSchema)

router.post('/login', loginController)

// CRUD
router.post('/register', registerController)
router.get('/read', readController)

module.exports = app=>app.use('/admin', router)

