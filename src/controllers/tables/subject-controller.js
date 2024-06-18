const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');
const updateTable = require('../../services/update-table-service');

const cSubject = async (req, res)=>{
	const { name, status, yearAdded } = req.body;

	if(!name || !yearAdded || !status)
		return res.send({ type: 'err', body: 'incomplet field' });

	const { id } = await createId('subjects');

	const result = await insertTable("subjects(id, name, status, year_added)", [id, name, status, yearAdded]);

	return res.send(result);
};

const rSubject = async (req, res)=>{
	const { id, name } = req.query;

	let result = null;

	if(!id && !name)
		return res.send('Incomplet Field');


	if(id)
		result = await getTable('subjects', 'byId', id);

	else
		result = await getTable('subjects', 'byName', name);

	return res.send(result);
};

const uSubject = async (req, res)=>{
	const { id, name, status } = req.body;

	if( !id || (!name && !status))
		return res.send({type: 'err', body: 'incomplet field'});


	const arrayTyped = [['name', name], ['status', status]];

	const result = await updateTable("UPDATE Subjects SET", {
		id: id,
		arrayTyped: arrayTyped
	});

	return res.send(result);

};

module.exports = { cSubject, rSubject, uSubject };

