import { calcGradePoint } from './calcGradePoint.js'
import { fixUnits } from './fixUnits.js'
import { passOrNot } from './passOrNot.js'

const main = ()=>{
    fixUnits()
    calcGradePoint()
    passOrNot(6)
}

main()

