"use strict";

// I'm using the free api https://randomuser.me/

// EXAMPLE
// year = 2024
// schoolYear = ["1st high", "2nd high"]
// classesNames = ["A", "B", "C"]

//	{
//		year: 2024,
//		school_year = {
//			"1st high": {
//				"A": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				},
//
//				"B": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				},
//
//				"C": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				}
//			},
//
//			"2nd high": {
//				"A": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				},
//
//				"B": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				},
//
//				"C": {
//					students: [studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId, studentId],(20 times)	
//					teachers: [teacherId, teacherId, teacherId, teacherId]
//				}
//			}
//		}
//	}

const { query } = require('../src/database/db')

const defaultConfig = {
	year: "2024",
	schoolYear: ["1st high", "2nd high"],
	classesNames: ["A", "B", "C"],
	studentsPerClass: 20,
	teachersPerClass: 4,
	avarageStudentsYear: 15,
	avarageTeacherYear: 30,
	idStudentEntryPoint: 0,
	idTeacherEntryPoint: 0,
	subjects: ["Math", "Physic", "Biology"] // STATIC
}

const setUpConfigs = ()=>{
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

	console.log(defaultConfig)
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

					sYears[schoolYear] = { "class": className, grade: {} }

					obj.subjects.forEach(e=>{
						sYears[schoolYear].grade[e] = {
							"first_unity":	Math.floor(Math.random() * 11),
							"second_unity": Math.floor(Math.random() * 11)
						}
					})

					// query(queryString, [s.name, s.short_name, s.age, s.id, sYears])

					return s.id 
				}),

				teachers: teachers.map(async e=>{ 
					const queryString = "INSERT INTO teachers(name, short_name, age, id, years) VALUES($1, $2, $3, $4, $5)"


					return e.id 
				}),

				subjects: obj.subjects
			}
		}
	}

	console.log(years)
}

const init = async ()=>{
	setUpConfigs()
	inject(defaultConfig, generateFakeNames)
}


init()

