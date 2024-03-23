"use strict";
// I am using the free API https://randomuser.me/api/?results=120&inc=name

const { query } = require('../src/database/db')

const doLog = (log)=>{
	console.log(`\nStudent id entrypoint ${log.DF['-sie']}\nTeacher id entrypoint ${log.DF['-tie']}\n`)
}

const flagMap = {
	"-sie": "0", // Student id entrypoint
	"-tie": "0",  // Teacher id entrypoint
	"-y": "2024" // Year
}

let defaultConfig = {}

const setFlags = ()=>{
	const [,,...flags] = process.argv

	flags.map(flag=>{
		const splitedFlag = flag.split('=') // [flag, falg value ]

		if(!flagMap[splitedFlag[0]]){
			console.log(`WARNING: The flag ${splitedFlag[0]} don't exists`)
			return false
		}

		flagMap[splitedFlag[0]] = splitedFlag[1]
		return true
	})

	defaultConfig = Object.assign(defaultConfig, flagMap)
	return true
}


const generate = async ()=>{
	let { results: studentsResult } = await fetch('https://randomuser.me/api/?results=120&inc=name').then(e=>{ return e.json() })

	studentsResult = studentsResult.map(({ name: student }, index)=>{
		const generateGrade = (obj)=>{
			obj[defaultConfig['-y']] = { // { defaultConfig[-y] } = { 2024 } (example)
				grade: {
					math: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ],
					english: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ],
					biology: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ]
				}
			}

			if(index >= 0 && index < 20){
				obj[defaultConfig['-y']]['1st year'] = 'A'
				return true
			}

			if(index < 40){
				obj[defaultConfig['-y']]['1st year'] = 'B'
				return true
			}

			if(index < 60){
				obj[defaultConfig['-y']]['1st year'] = 'C'
				return true
			}

			if(index < 80){
				obj[defaultConfig['-y']]['2nd year'] = 'A'
				return true
			}

			if(index < 100){
				obj[defaultConfig['-y']]['2nd year'] = 'B'
				return true
			}

			obj[defaultConfig['-y']]['2nd year'] = 'C'
			return true
		}

		const studentObj = {
			name:			`${student.first} ${student.last}`,
			short_name:		`${student.last}`,
			age:			Math.floor(Math.random() * 2) + 15,
			id:				flagMap['-sie']++,
		}

		generateGrade(studentObj)

		console.log(studentObj)

		return studentObj
	})

	return { studentsResult }
}

const inject = async ()=>{
	const { studentsResult } = await generate()

	// inserting students
	studentsResult.forEach(async student=>{
		const queryString = "INSERT INTO students(name, short_name, age, id, password, grade) VALUES($1, $2, $3, $4, $5, $6)"
		await query(queryString, [student.name, student['short_name'], student.age, student.id, 'noreal', student[defaultConfig['-y']]])
	})
}


const init = async ()=>{
	setFlags()
	await inject()

	doLog({ DF: defaultConfig })
}

init()

