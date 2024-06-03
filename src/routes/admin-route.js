const router = require('express').Router()
const { register } = require('../controllers/admin-controller')

router.post('/register', register)

module.exports = app => app.use('/admin', router)

