"use strict";
// I am using the free API https://randomuser.me/api/?results=120&inc=name

const log = new Object()

const doLog = ({ DF })=>{
	console.log(`\nStudent id entrypoint ${DF['-sie']}\nTeacher id entrypoint ${DF['-tie']}\n`)
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
	const { results } = await fetch('https://randomuser.me/api/?results=120&inc=name').then(e=>{ return e.json() })

	const students = []

	results.map(({ name: student })=>{
		const studentObj = {
			name:			`${student.first} ${student.last}`,
			short_name:		`${student.last}`,
			age:			Math.floor(Math.random() * 2) + 15,
			id:				flagMap['-sie']++,
		}

		studentObj[defaultConfig['-y']] = {
			"1st year": "A",
			grade: {
				math: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ],
				english: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ],
				biology: [ Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11) ]
			}
		}

		students.push(studentObj['2024']['grade'])
	})

	console.log(students)

	return results
}


const init = async ()=>{
	setFlags()

	await generate()

	doLog({ DF: defaultConfig })
}

init()

