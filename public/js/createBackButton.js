const createButton = ()=>{
    const links = document.querySelectorAll(".header__link")
    const backLink = document.querySelector(".back-link")

    // Verify if the length of links if > 1
    if ( !(links.length > 1) ){
        backLink.innerText = ''
        return;
    }

    const beforeLast = links.length - 2
    let countdown = 0;

    backLink.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    backLink.style.backgroundColor = "#555"
    backLink.style.border = "2px solid #555"

    for(let i of links){
        if ( beforeLast === countdown ){
            backLink.attributes.href.textContent = i.attributes.href.textContent
            return;
        }

        countdown++;
    }
}

createButton()

