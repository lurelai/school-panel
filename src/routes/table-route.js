'use strict';
const router = require('express').Router();

const { cYear, rYear } = require('../controllers/tables/year-controller');
const { cSchoolYear, uSchoolYear, rSchoolYear } = require('../controllers/tables/school-year-controller');
const { cSubject, rSubject, uSubject } = require('../controllers/tables/subject-controller');
const { cItinerary, dItinerary, rItinerary } = require('../controllers/tables/itinerary-controller');
const { cClass, rClass, uClass } = require('../controllers/tables/class-controller.js');
const { cStudent, rStudent } = require('../controllers/tables/student-controller.js');

// table: years
router.post('/years/create', cYear);
router.get('/years/read', rYear);


// table: school-year
router.get('/school-years/read', rSchoolYear);
router.post('/school-years/create', cSchoolYear);
router.put('/school-years/update', uSchoolYear);


// table: subject
router.post('/subjects/create', cSubject);
router.get('/subjects/read', rSubject);
router.put('/subjects/update', uSubject);


// table: itinerary
router.get('/itinerarys/read', rItinerary);
router.post('/itinerarys/create', cItinerary);
router.delete("/itinerarys/delete", dItinerary);


// table: class
router.get('/classes/read', rClass);
router.post('/classes/create', cClass);
router.put('/classes/update', uClass);


// table: student
router.post('/students/create', cStudent);
router.get('/students/read', rStudent);

module.exports = app=>app.use('/tables-way', router);

