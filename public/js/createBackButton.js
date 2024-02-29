// I am withou internet connection now, so, i'm not able to put a correctaly "back-button" now
const links = document.querySelectorAll(".header__link")
const backLink = document.querySelector(".back-link")

const createButton = ()=>{
    // Verify if the length of links if > 1
    if ( !(links.length > 1) ){
        backLink.innerText = ''
        return;
    }

    const beforeLast = links.length - 2
    let countdown = 0;

    for(let i of links){
        if ( beforeLast === countdown ){
            backLink.attributes.href.textContent = i.attributes.href.textContent
            return;
        }

        countdown++;
    }
}

createButton()

