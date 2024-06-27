const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');
const { updateTableSimple } = require('../../services/update-table-service');

const cSubject = async (req, res)=>{
	const { name, status, yearId } = req.body;

	// verify
	if(!name || !yearId || !status)
		return res.send({ type: 'err', body: 'incomplet field' });

	// get the id
	const { id } = await createId('subjects');

	// try to insert
	const result = await insertTable({
		table: "subjects(id, name, status, year_id)", 
		values: [id, name, status, yearId]
	});

	// send the result
	return res.send(result);
};

const rSubject = async (req, res)=>{
	const { id, name, status } = req.query;

	// simple verify
	if(!id && !name && !status)
		return res.send({type: 'err', body: 'incomplet field'});

	const arrayTyped = [['id', id], ['name', name], ['status', status]];

	const result = await getTable({
		toSelect: '*',
		table: 'Subjects',
		arrayTyped
	});


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
	const result = await updateTableSimple("UPDATE Subjects SET", {
		id: id,
		arrayTyped: arrayTyped
	});

	return res.send(result);
};

module.exports = { cSubject, rSubject, uSubject };

