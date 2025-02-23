const backdrop = document.querySelector(".backdrop")
const closeElement = document.querySelector(".thank__button")
const openButton = document.querySelector(".footer__button")
const inputFooter = document.querySelector(".footer__input")
const warning = document.querySelector(".footer__warning")


closeElement.addEventListener("click", () => {

    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none";
})

openButton.addEventListener("click", () =>{
    const index = inputFooter.value.includes("@");
console.log(index)
    if(!inputFooter.value.includes("@")){
        warning.style.color = "#900"
        inputFooter.style.border = "2px solid #900"
        warning.innerHTML = "Впишіть свою пошуту!"
    } else {
        warning.innerHTML = "*Підписавшись, Ви зможете ортимувати інформаццію про новинки на сайті"
        inputFooter.value=""
        warning.style.color = "#000"
        inputFooter.style.border = "none"
    backdrop.style.opacity = "1";
    backdrop.style.visibility = "visible";
    backdrop.style.pointerEvents = "initial"
    }
})

