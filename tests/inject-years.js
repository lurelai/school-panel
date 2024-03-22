"use strict";
// I am using the free API https://randomuser.me/api/?results=${ind.teacher}&inc=name

const log = new Object()

const doLog = (flagMap)=>{
	console.log(`\nStudent id entrypoint ${flagMap['-sie']}\nTeacher id entrypoint ${flagMap['-tie']}\n`)
}

const flagMap = {
	"-sie": 0, // Student id entrypoint
	"-tie": 0  // Teacher id entrypoint
}

const setFlags = ()=>{
	const [,,...flags] = process.argv

	flags.map(flag=>{
		const splitedFlag = flag.split('=') // [flag, falg value ]

		if(!flagMap[splitedFlag[0]]){
			console.log(`WARNING: The flag ${flag} don't exists`)
			return false
		}

		flagMap[splitedFlag[0]] = splitedFlag[1]
		return true
	})
}

const init = async ()=>{
	setFlags()

	doLog(flagMap)
}

init()

