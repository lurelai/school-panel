export const seeChanges = (array)=>{
    const inputs = document.querySelectorAll('.tbody__input')

    inputs.forEach(e=>{
        e.addEventListener('input', ()=>{
            array.forEach(element=>{
                element[0](element[1])
            })
        })
    })
}

