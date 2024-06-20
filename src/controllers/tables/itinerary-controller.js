'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const deleteTable = require('../../services/delete-table-service');

const cItinerary = async (req, res)=>{
	const { name, yearAdded } = req.body;

	// verify
	if(!name || !yearAdded )
		return res.send({type: 'err', body: 'incomplet field'});

	// get the id
	const { id } = await createId('itinerarys');

	// try to insert
	const result = await insertTable('itinerarys(ID, name, year_added)', [id, name, yearAdded]);

	return res.send(result);
};

const dItinerary = async (req, res)=>{
	const { id } = req.body;

	if(!id)
		return res.send({type: 'err', body: 'incomplet field'})

	const result = await deleteTable({
		table: "itinerarys",
		id
	});

	return res.send(result);
};

module.exports = { cItinerary, dItinerary };

