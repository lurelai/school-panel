'use strict';
const { createId } = require('../../services/work-id')


const insertYear = (req, res)=>{
	const { ID, year } = req.body

	if(!year)
		return res.send({ type: 'err', body: 'incomplet field' })

	console.log(createId('years'));

	return res.send('inserted');
};

module.exports = { insertYear }

