const { query } = require('../database/db');

const updateTableSimple = async (baseQuery, {id, arrayTyped, filter})=>{
	try{
		// baseQuery eq: UPDATE School_years SET (with a space after the SET)
		// id eq: Y-randomID (the value who is used to filter at the WHERE)
		// arrayTyped: the values to update + it's table name eq: [name, 'update-to-this-name']
		// filter: what becomes after the WHERE ...=$1 eq: "AND name='i am cool'"

		const values = [id];
		let queryString = baseQuery + " ";

		// set filter as a no length string
		if(!filter)
			filter = "";

		let i = 1;
		arrayTyped.forEach((e)=>{
			if(!e[1])
				return false;

			// add a new value to the values array
			values.push(e[1]);

			// concat the query string with current values name and the next current i
			queryString += `${e[0]}=$${i+1},`;

			// it just add if really have something at e[1]
			i++;
		});

		// finish to process the query string
		queryString = queryString.slice(0, queryString.length - 1);
		queryString += ` WHERE ID=$1 ${filter}`;

		//log
		console.log("log:", queryString, "//", values);

		await query(queryString, values);

		return { type: 'update', body: 'ok' };
	}catch(err){
		return { type: 'err', body: err };
	};
};

const updateTableArray = async (baseQuery, {arrayTyped, id})=>{
	let queryString = baseQuery + " ";

	const values = [id];

	let i = 1;
	arrayTyped.forEach((e)=>{
		if(!e[1] || e[1].length === 0)	
			return false;

		// add a new value to the values array
		values.push(e[1]);

		// concat the query string with the current values name and the next current i
		queryString += `${e[0]}=array_cat(${e[0]}, $${i+1}),`;
		i++;
	});

	// finish to process the query string
	queryString = queryString.slice(0, queryString.length - 1);
	queryString += ` WHERE ID=$1;`;

	console.log("log:", queryString, "//", values);
	try{
		await query(queryString, values);
		return { type: 'update', body: 'ok', };

	}catch(err){
		return { type: 'err', body: err };
	};

	return { queryString }
};

module.exports = { updateTableSimple, updateTableArray };

