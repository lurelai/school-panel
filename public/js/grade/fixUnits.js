export const fixUnits = ()=>{
    const units = document.querySelectorAll('.tbody__unit')

    for(let unit of units){
        if(!unit.innerText)
            continue

        unit.innerText = Number(unit.innerText).toFixed(2)
    }
}

