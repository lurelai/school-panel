const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');

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

module.exports = { cSubject, rSubject };

