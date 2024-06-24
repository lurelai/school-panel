'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');

const cClass = async (req, res)=>{
	const { name, fromYear, fromSchoolYear } = req.body;

	// verify
	if(!name || !fromYear || !fromSchoolYear)
		return res.send({type: 'err', body: 'incomplet field'});

	
	// get id
	const { id } = await createId('classes');

	// try to insert
	const result = await insertTable({
		table: "classes(name, from-year, from-school-year)",
		values: [name, fromYear, fromSchoolYear]
	});

	return res.send('okay');
};

module.exports = { cClass };

