// I'm using the free api "api.namefake.com/"
"use strict";

const set = async (howMany=20, mediaAge=15)=>{
	const infos = await fetch("https://api.namefake.com/")
		.then(response=>{ return response.json() })
		.then(response=>{ return response })
}

set()

