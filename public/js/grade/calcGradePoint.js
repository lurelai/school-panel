export const calcGradePoint = (isInput)=>{
    const rows = document.querySelectorAll('.tbody__tr')

    for(let currentRow of rows){
        const currentGradePoint = currentRow.querySelector('.tbody__grade-point')
        let currentUnits; 

        if(!isInput)
            currentUnits = currentRow.querySelectorAll('.tbody__unit')

        if(isInput)
            currentUnits = currentRow.querySelectorAll('.tbody__input')

        const rowInfo = {
            gradePoint: 0,
            unitsWithPoint: 0
        }

        // Used to see how many units had its point setted 
        for(let unit of currentUnits){
            if(!isInput){
                if(!unit.innerText)
                    continue

                rowInfo.gradePoint += Number((unit.innerText).replace(',', '.'))
                rowInfo.unitsWithPoint++
                continue
            }

            if(isInput){
                if(!unit.value)
                    continue

                rowInfo.gradePoint += Number(unit.value)
                rowInfo.unitsWithPoint++
                continue
            }
        }

        currentGradePoint.innerText = (rowInfo.gradePoint / rowInfo.unitsWithPoint).toFixed(2).replace('.', ',')
    }
}
