const slideLeft = document.querySelector("#left")
const slideRight = document.querySelector("#right")
const list = document.querySelector(".team__list")
const cardDanylo = document.querySelector("#first")
const cardOstap = document.querySelector("#second")

slideRight.addEventListener("click", () => {
 list.style.transform = 'translate(-160px, 0px)'
 cardDanylo.style.width="18px"
 cardDanylo.style.fill="#D9D9D9"
  cardOstap.style.width="30px"
 cardOstap.style.fill="#797979"
      cardOstap.style.x="26px"
})

slideLeft.addEventListener("click", () => {
    list.style.transform = 'translate(0px, 0px)'
     cardOstap.style.width="18"
     cardOstap.style.x="36px"
 cardOstap.style.fill="#D9D9D9"
     cardDanylo.style.width="30"
 cardDanylo.style.fill="#797979"
   })
