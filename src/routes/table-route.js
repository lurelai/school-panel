'use strict';
const router = require('express').Router();

const { cYear, rYear } = require('../controllers/tables/year-controller');
const { cSchoolYear, uSchoolYear } = require('../controllers/tables/school-year-controller');
const { cSubject } = require('../controllers/tables/subject-controller')

// table: years
router.post('/years/create', cYear);
router.get('/years/read/', rYear);


// table: school-year
router.post('/school-years/create', cSchoolYear);
router.put('/school-years/update', uSchoolYear);


// table: subject
router.post('/subjects/create', cSubject)

module.exports = app=>app.use('/tables-way', router);

