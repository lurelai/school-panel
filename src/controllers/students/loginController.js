const { loginService } = require('../../services/studentService')

const loginController = async (req, res)=>{
	const { id, password } = req.body

	if(!id)
		return res.send("You can't take requests without the id field")

	if(!password)
		return res.send("You can't take requests without the password field")

	// if all field are ok, send a request to database
	const { results, err, queryTime } = await loginService(id, password)

	console.log(queryTime, '\n')

	// if there's some err, send it
	if(err)
		return res.send(err)

	// If not, set a cookie say
	if(typeof results.studentRoute === "string")
		res.set({"Set-Cookie": `route=${results.studentRoute}; Secure`})

	else
		res.set({"Set-Cookie": `route=${JSON.stringify(results.studentRoute)}; Secure`});

	return res.send(results)
}

module.exports = loginController

