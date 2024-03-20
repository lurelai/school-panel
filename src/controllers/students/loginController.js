const { loginService } = require('../../services/studentService')

const loginController = async (req, res)=>{
	const { id, password } = req.body

	if(!id)
		return res.send("You can't take requests without the id field")

	if(!password)
		return res.send("You can't take requests without the password field")

	const result = await loginService(id, password)

	if(result.err)
		return res.send(result.err)

	return res.send('Logged')
}

module.exports = loginController

