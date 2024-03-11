const { teacherRegister } = require('../../services/registerService')

const registerController = async (req, res)=>{
    const { name, age, password } = req.body

    if(!name)
        return res.send("You can't send requests without the name field")

    if(!age)
        return res.send("You can't send requests without the age field")
    else if(isNaN(age))
        return res.send("The age field needs to be a number")

    if(!password)
        return res.send("You can't send requests without the password field")

    const result = await teacherRegister(name, age, password)

    if(!result.ok)
        return res.send(result.err)

    return res.send("Teacher's account created")
}

module.exports = registerController

