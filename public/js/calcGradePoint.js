const fixUnits = ()=>{
    const units = document.querySelectorAll('.tbody__unit')

    for(let unit of units){
        if(!unit.innerText)
            continue

        unit.innerText = Number(unit.innerText).toFixed(2)
    }
}

const passOrNot = (media)=>{
    const gradePoint = document.querySelectorAll('.tbody__grade-point')

    for(let i of gradePoint){
        if(Number(i.innerText) >= media){
            i.style.color = 'green'
            continue
        }

        i.style.color = 'red'
    }
}

const main = ()=>{
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

    passOrNot(6)
}

fixUnits()
main()

