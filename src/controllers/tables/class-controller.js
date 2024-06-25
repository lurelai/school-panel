'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');

const cClass = async (req, res)=>{
	const { name, yearId, schoolYearId } = req.body;

	// verify
	if(!name || !yearId || !schoolYearId)
		return res.send({type: 'err', body: 'incomplet field'});

	
	// get id
	const { id } = await createId('classes');

	// try to insert
	const result = await insertTable({
		table: "classes(name, year_id, school_year_id)",
		values: [name, yearId, schoolYearId]
	});

	return res.send('okay');
};

module.exports = { cClass };

