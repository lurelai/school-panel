const router = require('express').Router()
const login = require('../controllers/loginController')

router.get('/', login)

module.exports = router;

