const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 12 });

const createId = async (type)=>{
	const prefixs = {
		"years": "Y-",
		"school-years": "J-"
	};

	// verify if the type really exists
	if(!prefixs[type])
		return {type: 'err', body: 'err type', id: false};


	const start = Date.now();
	const id = prefixs[type] + randomUUID();
	const end = Date.now() - start;

	return { id, createIdTime: end + 'ms' };
};

module.exports = { createId };

