const { query } = require('../database/db')

const adminRegister = (name, pass)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await query(`INSERT INTO admin VALUES($1, $2)`, [name, pass])

            resolve({ok: 'ok', err: null})
        }catch(err){
            if(err.code === '23505')
                return resolve({ok: null, err: 'This name already exist'})

            return resolve({ok: null, err})
        }
    })
}

const studentRegister = (name, pass)=>{
    return new Promise(async (resolve, reject)=>{
        return resolve({ok: 'ok'})
    })
}

module.exports = { adminRegister, studentRegister }

