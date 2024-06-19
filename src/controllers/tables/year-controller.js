'use strict';
const createId = require('../../services/create-id-service');
const { getYear } = require('../../services/tables/year-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');

const cYear = async (req, res)=>{
	const { year } = req.body;

	// simple verify
	if(!year)
		return res.send({ type: 'err', body: 'incomplet field' });

	// other verify
	if(isNaN(Number(year)))
		return res.send({ type: 'err', body: 'year field needs to be a number' });

	// get and id
	const { id } = await createId('years');

	// try to insert
	const result = await insertTable("years(ID, year)", [id, year]);

	// send the result
	return res.send(result);
};


// I will stop at the read in the year's table, the idea of the years table is be something unmutable
const rYear = async (req, res) =>{
	const { id, year } = req.query;

	let result = null;

	// It needs to have at least one field (id or year) to go on
	if(!id && !year)
		return res.send('Incomplet Field');

	// If exists ID it will join here
	if(id)
		result = await getTable('years', 'byId', id);

	// If don't exist ID, it will join here(it only join here if id don't exist and year exist)
	if(!id)
		result = await getTable('years', 'byYear', year);

	return res.send(result);
};

module.exports = { cYear, rYear };

