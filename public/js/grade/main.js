import { calcGradePoint } from './calcGradePoint.js'
import { fixUnits } from './fixUnits.js'
import { passOrNot } from './passOrNot.js'

export const main = (callBack)=>{
    callBack( fixUnits, calcGradePoint, passOrNot )
}

