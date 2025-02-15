const options = document.querySelectorAll(".rps__button:nth-child(1)")

const rockOption = options[0]
const scissorOption = options[1]
const paperOption = options[2]
console.log(rockOption)


const winner = document.querySelector(".rps__result")
const compOption = document.querySelector(".rps__comp")
let compStats = document.querySelector(".Comp-value")
let yourStats = document.querySelector(".Your-value")



rockOption.addEventListener("click", () => {
    const variant = Math.round(Math.random() * (3 - 1) + 1);
    if(variant === 1){
        winner.style.visibility = "visible"
        winner.style.color = "gray"
        winner.innerHTML = "Нічия!"
        compOption.textContent = "Варіант комп’ютера: камінь"
    } else if (variant === 2){
        winner.style.visibility = "visible"
        winner.style.color = "#039900"
        winner.innerHTML = "Ви виграли раунд!"
        yourStats.textContent = +yourStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: ножниці"
    } else if (variant === 3){
        winner.style.visibility = "visible"
        winner.style.color = "#900"
        winner.innerHTML = "Комп’ютер виграв раунд!"
        compStats.textContent = +compStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: папір"
    }
    return winner
})

scissorOption.addEventListener("click", () => {
    const variant = Math.round(Math.random() * (3 - 1) + 1);
    if(variant === 2){
        winner.style.visibility = "visible"
        winner.style.color = "gray"
        winner.innerHTML = "Нічия!"
        compOption.textContent = "Варіант комп’ютера: ножниці"
    } else if (variant === 3){
        winner.style.visibility = "visible"
        winner.style.color = "#039900"
        winner.innerHTML = "Ви виграли раунд!"
        yourStats.textContent = +yourStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: папір"
    } else if (variant === 1){
        winner.style.visibility = "visible"
        winner.style.color = "#900"
        winner.innerHTML = "Комп’ютер виграв раунд!"
        compStats.textContent = +compStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: камінь"
    }
    return winner
})

paperOption.addEventListener("click", () => {
    const variant = Math.round(Math.random() * (3 - 1) + 1);
    if(variant === 3){
        winner.style.visibility = "visible"
        winner.style.color = "gray"
        winner.innerHTML = "Нічия!"
        compOption.textContent = "Варіант комп’ютера: папір"
    } else if (variant === 1){
        winner.style.visibility = "visible"
        winner.style.color = "#039900"
        winner.innerHTML = "Ви виграли раунд!"
        yourStats.textContent = +yourStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: камінь"
    } else if (variant === 2){
        winner.style.visibility = "visible"
        winner.style.color = "#900"
        winner.innerHTML = "Комп’ютер виграв раунд!"
        compStats.textContent = +compStats.textContent + 1
        compOption.textContent = "Варіант комп’ютера: ножниці"
    }
    return winner
})