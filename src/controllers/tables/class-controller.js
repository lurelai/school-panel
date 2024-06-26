'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');

const cClass = async (req, res)=>{
	const { name, yearId, schoolYearId } = req.body;

	// verify
	if(!name || !yearId || !schoolYearId)
		return res.send({type: 'err', body: 'incomplet field'});

	
	// get id
	const { id } = await createId('classes');

	// try to insert
	const result = await insertTable({
		table: "classes(id, name, year_id, school_year_id)",
		values: [id, name, yearId, schoolYearId]
	});

	return res.send(result);
};

const rClass = async (req, res)=>{
	const { id, name, yearId, schoolYearId, itinerary } = req.query;

	console.log(name)
	if(!id && !name && !yearId && !schoolYearId && !itinerary)
		return res.send({type: 'err', body: 'incomplet field'});

	const arrayTyped = [
	['id', id], ['name', name], ['year_id', yearId],
	['school_year_id', schoolYearId], ['itinerary', itinerary]];

	// try to get
	const result = await getTable({
		toSelect: '*',
		table: 'Classes',
		arrayTyped
	});

	return res.send(result);
}

module.exports = { cClass, rClass };

