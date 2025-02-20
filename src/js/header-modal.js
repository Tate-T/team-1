const headerLink = document.querySelector(".header__minitext");

headerLink.addEventListener("click", () => {
  document.querySelector(".backdrope").style.display = "flex";
  document.body.style.overflow = "hidden";

  document.querySelector(".modale__text").style.display = "flex";
  document.querySelector(".modale__minitext").style.display = "flex";
  document.querySelector(".modale__button").style.display = "flex";
  document.querySelector(".modale__input").style.display = "flex";
  document.querySelector(".modale__thank").style.display = "none";
});

const headerCan = document.querySelector(".modale__cancel");

headerCan.addEventListener("click", () => {
    document.querySelector(".backdrope").style.display = "none";
    document.body.style.overflow = "scroll";
})

const headerThank = document.querySelector(".modale__button");

headerThank.addEventListener("click", () => {
  if(document.querySelector(".modale__input").value !== ""){
    document.querySelector(".modale__text").style.display = "none";
    document.querySelector(".modale__minitext").style.display = "none";
    document.querySelector(".modale__button").style.display = "none";
    document.querySelector(".modale__input").style.display = "none";
    document.querySelector(".modale__thank").style.display = "flex";
    document.querySelector(".header__minitext").textContent = `Вітаємо, ${document.querySelector(".modale__input").value}!`
  }else {
    document.querySelector(".modale__input").style.border = "red solid 2px"
  }
})