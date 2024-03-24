const { loginService } = require('../../services/studentService')

const loginController = async (req, res)=>{
	const { id, password } = req.body

	if(!id)
		return res.send("You can't take requests without the id field")

	if(!password)
		return res.send("You can't take requests without the password field")

	const { results, err } = await loginService(id, password)

	if(err)
		return res.send(err)

	if(typeof results.studentRoute === "string")
		res.set({ "Set-Cookie": `route=${results.studentRoute}`})

	else
		res.set({"Set-Cookie": `route=${JSON.stringify(results.studentRoute)}`});

	return res.send(results)
}

module.exports = loginController

