export const fixUnits = (isInput)=>{
    let units;

    if(!isInput)
        units = document.querySelectorAll('.tbody__unit')

    if(isInput)
        units = document.querySelectorAll('.tbody__input')

    for(let unit of units){
        if(!isInput){
            if(!unit.innerText)
                continue

            unit.innerText = Number(unit.innerText).toFixed(2).replace('.', ',')
            continue
        }

        if(!unit.value)
            continue

        unit.value = Number(unit.value).toFixed(2)
    }
}

