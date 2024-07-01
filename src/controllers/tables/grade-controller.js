'use strict';
const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');

const cGrade = async (req, res)=>{
	const { classId, yearId } = req.body;

	if(!classId || !yearId)
		return res.send({type: 'err', body: 'incomplet field'});

	// get id
	const { id } = await createId('grades');
	console.log(classId, yearId, id)

	// try to insert
	const result = await insertTable({
		table: 'grades(id, class_id, year_id)',
		values: [id, classId, yearId]
	})

	return res.send(result);
};

module.exports = { cGrade };

