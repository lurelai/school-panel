'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');

const cStudent = async (req, res)=>{
	const { name, age, sex } = req.body;

	// verify
	if(!name || !age || !sex)	
		return res.send({type: 'err', body: 'incomplet field'});

	// get id
	const { id } = await createId('students');


	// try to insert
	const result = await insertTable({
		table: "students(ID, name, age, sex)",
		values: [id, name, age, sex]
	});

	return res.send(result);
};

const rStudent = async (req, res)=>{
	const { id, name, age, sex } = req.query;

	if(!id && !name && !age && !sex)
		return res.send({type: 'err', body: 'incomplet field'});

	
	// set the array typed
	const arrayTyped = [['id', id], ['name', name], ['age', age], ['sex', sex]];

	const result = await getTable({
		toSelect: '*',
		table: 'Students',
		arrayTyped
	});

	return res.send(result);
};

module.exports = { cStudent, rStudent };

