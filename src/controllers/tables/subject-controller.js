const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');
const updateTable = require('../../services/update-table-service');

const cSubject = async (req, res)=>{
	const { name, status, yearAdded } = req.body;

	// verify
	if(!name || !yearAdded || !status)
		return res.send({ type: 'err', body: 'incomplet field' });

	// get the id
	const { id } = await createId('subjects');

	// try to insert
	const result = await insertTable("subjects(id, name, status, year_added)", [id, name, status, yearAdded]);

	// send the result
	return res.send(result);
};

const rSubject = async (req, res)=>{
	const { id, name } = req.query;

	let result = null;

	// simple verify
	if(!id && !name)
		return res.send('Incomplet Field');

	// if there's an id send to the byId query
	if(id)
		result = await getTable('subjects', 'byId', id);

	// if not send to the byName query
	else
		result = await getTable('subjects', 'byName', name);

	return res.send(result);
};

const uSubject = async (req, res)=>{
	const { id, name, status } = req.body;

	// simple verify
	if( !id || (!name && !status))
		return res.send({type: 'err', body: 'incomplet field'});

	// create the arrayTyped
	const arrayTyped = [['name', name], ['status', status]];

	// send all to the result
	const result = await updateTable("UPDATE Subjects SET", {
		id: id,
		arrayTyped: arrayTyped
	});

	return res.send(result);
};

module.exports = { cSubject, rSubject, uSubject };

