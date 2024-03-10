const { adminValidation } = require('../../services/loginService')

const loginController = async (req, res)=>{
    const { name, password } = req.body

    if(!name)
        return res.send({msg: "You can't send requests without the name's field"})

    if(!password)
        return res.send({msg: "You can't send requests without the password's field"})

    const result = await adminValidation(name, password)
    console.log(result)

    if ( !result.ok )
        return res.send(result.err)

    return res.send('Logged')
}

module.exports = loginController

