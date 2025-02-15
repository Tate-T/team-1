const rockOption = document.querySelector(".rps__button:nth-child(1)")
const scisorOption = document.querySelector(".rps__button:nth-child(2)")
const paperOption = document.querySelector(".rps__button:nth-child(3)")
console.log(rockOption)

const winner = document.querySelector(".rps__result")
const compOption = document.querySelector(".rps__comp")
const compStats = document.querySelector(".Comp-value")
const yourStats = document.querySelector(".Your-value")
rockOption.addEventListener("click", () => {
    const variant = Math.round(Math.random() * (3 - 1) + 1);
    if(variant === 1){
        winner.style.visibility = "visible"
        winner.style.color = "gray"
        winner.innerHTML = "Нічия!"
    }
    return console.log(variant)
})