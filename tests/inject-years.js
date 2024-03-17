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

const inject = async (obj)=>{
	// const infos = await fetch("https://api.namefake.com/")
	let yearsSchoolYears = {}

	for(let i of obj.schoolYear){
		yearsSchoolYears[i] = {}
		for(let j of obj.classesNames){
			yearsSchoolYears[i][j] = {}
		}
	}

	console.log(yearsSchoolYears)
}

const generateFakeNames = async (obj)=>{
	const { avarageStudentsYear: aS, avarageTeacherYear: aT } = obj
	const students = []
	const teachers = []

	let ind = obj.classesNames.length * obj.studentsPerClass
	let result = null


	result = await fetch(`https://randomuser.me/api/?results=${ind}&inc=name`).then(res=>{ return res.json() })
	
	for(let i of result.results){
		const { first, last } = i.name

		students.push({
			name: first + ' ' + last,
			short_name: last,
			age: (Math.random() * ((aS + 1) - (aS - 1)) + (aS - 1)).toFixed(2),
			id: obj.idStudentEntryPoint
		})

		obj.idStudentEntryPoint++
		obj.idTeacherEntryPoint++
	}

	ind = obj.classesNames.length * obj.teachersPerClass
	result = await fetch(`https://randomuser.me/api/?results=${ind}&inc=name`).then(res=>{ return res.json() })

	for(let i of result.results){
		const { first, last } = i.name
	}

}

const init = ()=>{
	setUpConfigs()
	// inject(defaultConfig)
	generateFakeNames(defaultConfig)
}


init()

