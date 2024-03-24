const { loginService } = require('../../services/studentService')

const loginController = async (req, res)=>{
	const { id, password } = req.body

	if(!id)
		return res.send("You can't take requests without the id field")

	if(!password)
		return res.send("You can't take requests without the password field")

	// if all field are ok, send a request to database
	const { result, err, queryTime } = await loginService(id, password)


	// Logging the query time
	console.log(`Login query time: ${queryTime}`, '\n')

	// if there's some err, send it
	if(err)
		return res.send(err)

	return res.send(result)
}

module.exports = loginController

