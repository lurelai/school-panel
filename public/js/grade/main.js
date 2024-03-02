import { calcGradePoint } from './calcGradePoint.js'
import { fixUnits } from './fixUnits.js'
import { passOrNot } from './passOrNot.js'
import { seeChanges } from './seeChanges.js'

export const main = (callBack)=>{
    callBack({fix: fixUnits, calc: calcGradePoint, passOrNot, see: seeChanges})
}

