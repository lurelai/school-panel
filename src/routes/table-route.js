'use strict';
const router = require('express').Router()

const { createYear } = require('../controllers/tables/year-controller')

// table: years
router.post('/years/insert', createYear);


module.exports = app=>app.use('/tables-way', router);

