const { studentValidation } = require('../../services/loginService')

const loginController = async (req, res)=>{
    const { id, password } = req.body

    if(!id)
        return res.send("You can't send requests without the id field")

    else if(isNaN(id))
        return res.send("The id need to be a number")

    if(!password)
        return res.send("You can't send requests without the password field")

    const result = await studentValidation(id, password)

    if(!result.ok)
        return res.send(result.err)

    return res.send('Logged')
}

module.exports = loginController

