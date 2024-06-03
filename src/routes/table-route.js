'use strict';
const router = require('express').Router()

const { insertYear } = require('../controllers/tables/year-controller')

// table: years
router.post('/years/insert', insertYear);


module.exports = app=>app.use('/tables-way', router);

