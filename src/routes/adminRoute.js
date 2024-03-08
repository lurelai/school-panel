const router = require('express').Router()

const { home, schoolYearList, classesList, classSchema } = require('../controllers/adminController')

router.get('/', home)
router.get('/:year', schoolYearList)
router.get('/:year/:schoolYear', classesList)
router.get('/:year/:schoolYear/:class', classSchema)

module.exports = app=>app.use('/admin', router)

