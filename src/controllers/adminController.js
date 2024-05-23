// REGISTER -- POST --
const register = (req, res)=>{
	// simple for now
	const { name, password } = req.body
	
	// pre-see
	if(!name || !password)
		return res.send("request dinied")

	// send the info for database
	

	return res.send("new admin created")
}

module.exports = { register }

