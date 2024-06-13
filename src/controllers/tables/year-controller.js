'use strict';
const { createId } = require('../../services/work-id-service');
const { insertYear, getYear } = require('../../services/tables/year-service');
const insertTable = require('../../services/insert-table-service');

const createYear = async (req, res)=>{
	const { year } = req.body;

	if(!year)
		return res.send({ type: 'err', body: 'incomplet field' });

	if(isNaN(Number(year)))
		return res.send({ type: 'err', body: 'year field needs to be a number' });

	const { id } = await createId('years');

	const result = await insertTable("years(ID, year)", [id, year]);

	return res.send(result);
};


// I will stop at the read in the year's table, the idea of the years table is be something unmutable
const readYear = async (req, res) =>{
	const { id, year } = req.query;

	let result = null;

	// It needs to have at least one field (id or year) to go on
	if(!id && !year)
		return res.send('Incomplet Field');

	// If exists ID it will join here
	if(id)
		result = await getYear('id', id);

	// If don't exist ID, it will join here(it only join here if id don't exist and year exist)
	if(!id)
		result = await getYear('name', year);

	return res.send(result);
};

module.exports = { createYear, readYear };

