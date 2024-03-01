export const passOrNot = (media)=>{
    const gradePoint = document.querySelectorAll('.tbody__grade-point')

    for(let i of gradePoint){
        if(Number((i.innerText).replace(',', '.')) >= media){
            i.style.color = 'green'
            continue
        }

        i.style.color = 'red'
    }
}
