const { query } = require('../database/db')

const adminRead = (name)=>{
    return new Promise(async (resolve, reject)=>{
        const result = await query(`SELECT name FROM admin`)

        if(result.rows === 0)
            return resolve({ok: null, err: "There's no admin's account"})

        return resolve({ok: 'ok', rows: result.rows, err: null})
    })
}

const studentRead = (obj)=>{
    return new Promise(async (resolve, reject)=>{
        const queryHalf = createQueryFilterByObject(obj)

        const result = await query(`SELECT * FROM students WHERE ${queryHalf}`)
        console.log(result)

        return resolve({ok: 'ok'})
    })
}

module.exports = { adminRead, studentRead }

