const { query } = require('../database/db')

const adminRead = (obj)=>{
    return new Promise(async (resolve, reject)=>{
        resolve({ok: 'ok'})
    })
}

module.exports = { adminRead }

