const { adminRegister } = require('../../services/registerService')

const registerController = async (req, res)=>{
    const { name, password } = req.body

    if(!name)
        return res.send("You can't send request without the name field")

    if(!password)
        return res.send("You can't send request without the password field")

    const result = await adminRegister(name, password)

    if(!result.ok)
        return res.send(result.err)

    return res.send('New admin account created')
}

module.exports = registerController

