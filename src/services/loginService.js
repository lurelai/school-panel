const { query } = require('../database/db.js')

const adminValidation = (admin, password)=>{
    return new Promise(async (resolve, reject)=>{
        const result = await query("SELECT * FROM admin WHERE a_usr=$1 AND password=$2", [admin, password])
        const resultRows = result.rows

        if(resultRows.length === 0)
            return resolve({ ok: null, err: "Permission Denied! invalid credentials" })

        if(resultRows.length > 1)
            return resolve({ ok: null, err: "There's something wrong with the database, call a programmer to see it"})

        return resolve({ ok: 'ok', err: null })
    })
}

const studentValidation = (id, pass)=>{
    return new Promise(async (resolve, reject)=>{
        const result = await query("SELECT * FROM students WHERE id=$1 AND password=$2", [id, pass])
        const resultRow = result.rows

        if(resultRow.length === 0)
            return resolve({ok: null, err: "Invalid credentials"})

        if(resultRow.length > 1)
            return resovle({ok: null, err: "There's something wrong with you student account, contact your school to more info"})

        resolve({ok: 'ok', err: null})
    })
}

module.exports = { adminValidation, studentValidation }

