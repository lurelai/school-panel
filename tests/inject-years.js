// I'm using the free api "api.namefake.com/"
"use strict";

const { query } = require('../src/database/db')
const [,,...args] = process.argv

const inject = async (year, schoolYear, classesNames, studentsPerClass=20, teacherPerClass=4, averageYear=15)=>{
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


	const infos = await fetch("https://api.namefake.com/")
		.then(response=>{ return response.json() })
		.then(response=>{ return response.name })

	console.log(infos)
}

set()

