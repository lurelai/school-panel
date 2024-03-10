const { query } = require('../database/db.js')

const adminValidation = (admin, pass)=>{
    return new Promise(async (resolve, reject)=>{
        const { rowCount } = await 
            query(`SELECT name FROM admin 
                WHERE name=$1 AND password=$2`, [admin, pass])

        if(rowCount === 0)
            return resolve({ ok: null, err: "Permission Denied! Invalid credentials" })

        if(rowCount > 1)
            return resolve({ ok: null, err: "There's something wrong with the database, call a programmer to see it"})

        return resolve({ ok: 'ok', err: null })
    })
}

const studentValidation = (id, pass)=>{
    return new Promise(async (resolve, reject)=>{
        const { rowCount } = await 
            query(`SELECT student_ID FROM students 
                WHERE student_ID=$1 AND student_password=$2`, [id, pass])

        if(rowCount === 0)
            return resolve({ok: null, err: "Permission Denied! Invalid credentials"})

        if(rowCount > 1)
            return resovle({ok: null, err: "There's something wrong with your student account, contact your school for more info"})

        resolve({ok: 'ok', err: null})
    })
}

const teacherValidation = (id, pass)=>{
    return new Promise(async (resolve, reject)=>{
        const { rowCount } = await 
        query(`SELECT * FROM teachers 
            WHERE teacher_ID=$1 AND teacher_password=$2`, [id, pass])

        if(rowCount === 0)
            return resolve({ok: null, err: 'Permission Denied! Invalid credentials'})

        if(rowCount > 1)
            return resolve({ok: null, err: "There's something wrong with your account, contact the school for more help"})

        resolve({ok: 'ok', err: null})
    })
}

module.exports = { adminValidation, studentValidation, teacherValidation }

