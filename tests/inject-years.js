"use strict";

// I'm using the free api https://randomuser.me/

const { query } = require('../src/database/db')
const log = {
	finalStudentIdEntrypoint: null,
	finalTeacherIdEntrypoint: null,
	studentsCreated: 0,
	teachersCreated: 0,
	totalTimeQueryTeacher: 0,
	totalTimeQueryStudent: 0,
	timeQueryFinal: 0
}

const defaultConfigStatic = {
	year: "2024",
	schoolYear: ["1st high", "2nd high"],
	classesNames: ["A", "B", "C"],
	studentsPerClass: 20,
	teachersPerClass: 3,
	avarageStudentsYear: 15,
	avarageTeacherYear: 30,
	idStudentEntryPoint: 0,
	idTeacherEntryPoint: 0,
	subjects: ["Math", "Physic", "Biology"] // STATIC
}

const defaultConfig = Object.assign({}, defaultConfigStatic)

const setUpConfigs = async ()=>{
	const [,, ...args] = process.argv

	const mapping = {
		"-y": "year",
		"-sy": "schoolYear",
		"-cn": "classesNames",
		"-spc": "studentsPerClass",
		"-tpc": "teachersPerClass",
		"-asy": "avarageStudentsYear",
		"-aty": "avarageTeacherYear",
		"-se": "idStudentEntryPoint",
		"-te": "idTeacherEntryPoint",
	}

	for(let i of args){
		const [flag, value] = i.split('=')

		if(!mapping[flag]){
			console.error({msg: `WARNING: the flag "${flag}" are invalid`})
			continue
		}

		if(flag === "-sy" || flag === "-cn"){
			defaultConfig[mapping[flag]] = value.split('&')
			continue
		}

		defaultConfig[mapping[flag]] = value
	}
}

const generateFakeNames = async (obj, ind)=>{
	const { avarageStudentsYear: aS, avarageTeacherYear: aT } = obj
	const students = []
	const teachers = []

	let result = await fetch(`https://randomuser.me/api/?results=${ind.student}&inc=name`).then(res=>{ return res.json() })
	
	for(let i of result.results){
		const { first, last } = i.name

		students.push({
			name: first + ' ' + last,
			short_name: last,
			age: (Math.random() * ((aS + 1) - (aS - 1)) + (aS - 1)).toFixed(2),
			id: obj.idStudentEntryPoint
		})

		obj.idStudentEntryPoint++
	}

	result = await fetch(`https://randomuser.me/api/?results=${ind.teacher}&inc=name`).then(res=>{ return res.json() })

	for(let i of result.results){
		const { first, last } = i.name

		teachers.push({
			name: first + ' ' + last,
			short_name: last,
			age: (Math.random() * ((aT + 1) - (aS - 1)) + (aS - 1)).toFixed(2),
			id: obj.idTeacherEntryPoint
		})

		obj.idTeacherEntryPoint++
	}

	return { students, teachers }
}

const inject = async (obj, create)=>{
	const { studentsPerClass: SPC, teachersPerClass: TPC } = obj

	let years = {}

	// set the "years" variable... see /example/years.json
	for(let schoolYear of obj.schoolYear){
		years[schoolYear] = {}	

		for(let className of obj.classesNames){
			const { students, teachers } = await create(obj, {student: SPC, teacher: TPC})

			years[schoolYear][className] = {
				students: students.map(async s=>{ 
					const queryString = "INSERT INTO students(name, short_name, age, id, years) VALUES($1, $2, $3, $4, $5)"
					const sYears = {}

					sYears[obj.year] = {}
					sYears[obj.year][schoolYear] = { "class": className, grade: {} }

					obj.subjects.forEach(e=>{
						sYears[obj.year][schoolYear].grade[e] = {
							"first_unity":	Math.floor(Math.random() * 11),
							"second_unity": Math.floor(Math.random() * 11)
						}
					})

					const { queryTime } = await query(queryString, [s.name, s.short_name, s.age, s.id, sYears])

					log.totalTimeQueryStudent += queryTime
					log.studentsCreated++

					return s.id 
				}),

				teachers: teachers.map(async (t, index)=>{ 
					const queryString = "INSERT INTO teachers(name, short_name, age, id, years) VALUES($1, $2, $3, $4, $5)"
					const tYears = {}

					tYears[obj.year] = {}
					tYears[obj.year][schoolYear] = [[ className, obj.subjects[index], "on going" ]]

					const { queryTime } = await query(queryString, [t.name, t.short_name, t.age, t.id, tYears])

					log.totalTimeQueryTeacher += queryTime
					log.teachersCreated++

					return t.id 
				}),

				subjects: obj.subjects
			}
		}
	}

	const { queryTime } = await query("INSERT INTO years(year, school_years) VALUES($1, $2)", [obj.year, years])

	log.timeQueryFinal = queryTime
	log.finalStudentIdEntrypoint = defaultConfig.idStudentEntryPoint - 1
	log.finalTeacherIdEntrypoint = defaultConfig.idTeacherEntryPoint - 1

	log.timeQueryFinal = String(log.timeQueryFinal) + ' ms'
	log.totalTimeQueryTeacher = String(log.totalTimeQueryTeacher) + ' ms'
	log.totalTimeQueryStudent = String(log.totalTimeQueryStudent) + ' ms'
}

const init = async ()=>{
	await setUpConfigs()
	await inject(defaultConfig, generateFakeNames)

	console.log("==========================================================")
	console.log("DEFAULT CONFIG")
	console.log(defaultConfigStatic)
	console.log("==========================================================")
	console.log("\n==========================================================")
	console.log("LOG")
	console.log(log)
}

init()

