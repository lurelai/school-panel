'use strict';
const { createId } = require('../../services/work-id-service');
const { insertSchoolYear, updateSchoolYear } = require('../../services/tables/school-year-service');
const updateQuery = require('../../services/update-query-service');

// create school year
const cSchoolYear = async (req, res)=>{
	const { name, jLevel, year_id } = req.body;

	// verify the fields
	if(!name || !jLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	// get a new id
	const { id } = await createId('school-years');


	const result = await insertSchoolYear(id, name, jLevel, year_id);
	return res.send(result)
};

// update school year
const uSchoolYear = async (req, res)=>{
	const { id, name, yearId, jLevel } = req.body;

	// verify the fields
	if( !id || (!name && !yearId && !jLevel))
		return res.send({type: 'err', body: 'incomplet field'});

	// set the arrayTyped to the updateQuery
	const arrayTyped = 
		[['name', name], ['year_id', yearId], ['j_level', jLevel]];

	// Get the queryString and its array of values
	const { queryString, values } = 
		updateQuery("UPDATE School_years SET ", id, arrayTyped, "id");


	const result = await updateSchoolYear(queryString, values);
	return res.send(result);
};

module.exports = { cSchoolYear, uSchoolYear };

