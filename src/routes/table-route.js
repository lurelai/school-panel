'use strict';
const router = require('express').Router();

const { createYear, readYear } = require('../controllers/tables/year-controller');
const { createSchoolYear } = require('../controllers/tables/school-year-controller');

// table: years
router.post('/years/create', createYear);
router.get('/years/read/', readYear);


// table: school-year
router.post('/school-years/create', createSchoolYear);


module.exports = app=>app.use('/tables-way', router);

