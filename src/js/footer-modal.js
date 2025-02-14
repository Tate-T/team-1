const backdrop = document.querySelector(".backdrop")
const closeElement = document.querySelector(".thank__button")
const openButton = document.querySelector(".footer__button")

closeElement.addEventListener("click", () => {
    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none";
})

openButton.addEventListener("click", () =>{
    backdrop.style.opacity = "1";
    backdrop.style.visibility = "visible";
    backdrop.style.pointerEvents = "initial"
})

