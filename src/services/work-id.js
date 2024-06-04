const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 12 });

const createId = (type)=>{
	if(type === 'years'){
		const start = Date.now();
		const ID = randomUUID();
		const end = Date.now() - start;

		return { ID, createIdTime: end + 'ms' };
	};

	return { ID: false };
};

module.exports = { createId };

