const input = document.querySelector(".year__input")
const text = document.querySelector(".year__result")
const form = document.querySelector(".year__form")
form.addEventListener("submit", (e) => {
    if ( input.value % 4 === 0) {
        text.style.visibility = "visible"
                text.style.color = "#039900"
        text.innerHTML = "Ви народилися у високосний рік!"
    } else {
        text.style.color = "#900"
        text.innerHTML = "Ви народилися не у високосний рік!"
         text.style.visibility = "visible"
    }
    e.preventDefault();
    return console.log(input.value);
})