const { studentValidation } = require('../../services/loginService')

const loginController = async (req, res)=>{
    const { studentID, password } = req.body

    if(!studentID)
        return res.send("You can't send request without the studentID field")

    else if(isNaN(studentID))
        return res.send("The studentID need to be a number")

    if(!password)
        return res.send("You can't send request without the password field")

    const result = await studentValidation(studentID, password)

    if(!result.ok)
        return res.send(result.err)

    return res.send('Logged')
}

module.exports = loginController

