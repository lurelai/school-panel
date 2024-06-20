'use strict';
const router = require('express').Router();

const { cYear, rYear } = require('../controllers/tables/year-controller');
const { cSchoolYear, uSchoolYear } = require('../controllers/tables/school-year-controller');
const { cSubject, rSubject, uSubject } = require('../controllers/tables/subject-controller');
const { cItinerary } = require('../controllers/tables/itinerary-controller');

// table: years
router.post('/years/create', cYear);
router.get('/years/read', rYear);


// table: school-year
router.post('/school-years/create', cSchoolYear);
router.put('/school-years/update', uSchoolYear);


// table: subject
router.post('/subjects/create', cSubject);
router.get('/subjects/read', rSubject);
router.put('/subjects/update', uSubject);


// table: itinerary
router.post('/itinerarys/create', cItinerary)


module.exports = app=>app.use('/tables-way', router);

