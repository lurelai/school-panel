'use strict';
const router = require('express').Router()

const { createYear, readYear } = require('../controllers/tables/year-controller')

// table: years
router.post('/years/create', createYear);
router.get('/years/read/', readYear);


module.exports = app=>app.use('/tables-way', router);

