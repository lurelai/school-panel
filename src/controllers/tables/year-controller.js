'use strict';
const { createId } = require('../../services/work-id')
const { insertYear } = require('../../services/year-table')

const createYear = async (req, res)=>{
	const { year } = req.body;

	if(!year)
		return res.send({ type: 'err', body: 'incomplet field' });

	if(isNaN(Number(year)))
		return res.send({ type: 'err', body: 'year field needs to be a number' });

	const { ID } = await createId('years');

	const result = await insertYear(ID, year);

	return res.send(result);
};

module.exports = { createYear };

