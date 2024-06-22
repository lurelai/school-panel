'use strict';
const createId = require('../../services/create-id-service');
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

	// verify
	if(!id && !year)
		return res.send({type: 'err', body: 'incomplet field'});

	// set the array typed
	const arrayTyped = [['id', id], ['year', year]];

	// get the result
	const result = await getTable({
		toSelect: '*',
		table: 'Years',
		arrayTyped
	});

	return res.send(result);
};

module.exports = { cYear, rYear };

