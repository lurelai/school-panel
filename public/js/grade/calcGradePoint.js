export const calcGradePoint = ()=>{
    const rows = document.querySelectorAll('.tbody__tr')

    for(let currentRow of rows){
        const currentUnits = currentRow.querySelectorAll('.tbody__unit')
        const currentGradePoint = currentRow.querySelector('.tbody__grade-point')

        const rowInfo = {
            gradePoint: 0,
            unitsWithPoint: 0
        }

        // Used to see how many units had its point setted 
        for(let unit of currentUnits){
            if(!unit.innerText)
                continue

            rowInfo.gradePoint += Number(unit.innerText)
            rowInfo.unitsWithPoint++
        }

        currentGradePoint.innerText = (rowInfo.gradePoint / rowInfo.unitsWithPoint).toFixed(2)
    }
}
