const router = require('express').Router()
const { home, grade } = require('../controllers/teacherController')

router.get('/', home)
router.get('/:grade', grade)

module.exports = app=>app.use('/teacher', router)

