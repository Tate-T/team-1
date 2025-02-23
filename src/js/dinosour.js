document.querySelector('.dinosour__button').addEventListener("click" ,() => {
    document.querySelector(".setting__backdrop").style.display = "flex";
    document.body.style.overflow = "hidden";
});


document.querySelector('.setting__button').addEventListener("click" ,() => {
  document.querySelector(".setting__backdrop").style.display = "none";
  document.body.style.overflow = "scroll";
});





let play = 0;
let scor = 0;
let v = 0;
const dino = document.querySelector("#dino");
const cukctus = document.querySelector("#cucktus");
let dinoPos = dino.getBoundingClientRect();
let cuckPos = cukctus.getBoundingClientRect();
document.querySelector(".dinosour__box").addEventListener("click", () => {
  if (play === 0) {
    move();
    dino
    .querySelector("use")
    .setAttribute("href", "./img/symbol-defs.svg#icon-male");
    play = 1;
  } else if (play === 1) {
    play = 2;
  }
});

document.addEventListener("keydown", () => {
  jump();
});

function jump() {
  dino
    .querySelector("use")
    .setAttribute("href", "../img/symbol-defs.svg#icon-child");
  dino.style.animation = "ease-out 1.2s dino";
  setTimeout(() => {
    dino
      .querySelector("use")
      .setAttribute("href", "../img/symbol-defs.svg#icon-male");
    dino.style.animation = "none";
  }, 1200);
}

function move() {
  let dinoPosi = dino.getBoundingClientRect();
  let cuckPosi = cukctus.getBoundingClientRect();
  if (play === 2) {
    play = 0;
    return;
  }
  if (
    dinoPosi.right > cuckPosi.left &&
    dinoPosi.left < cuckPosi.right &&
    dinoPosi.bottom > cuckPosi.top &&
    dinoPosi.top < cuckPosi.bottom
  ) {
    
    v = -40;
    scor = 0;
    document.querySelector(".dinosour__minitext").textContent = scor;
    dino
    .querySelector("use")
    .setAttribute("href", "./img/symbol-defs.svg#icon-user");
        play = 2;
  }
  if (Math.abs(dinoPosi.left - cuckPosi.left) < 1.5) {
    scor++;
    document.querySelector(".dinosour__minitext").textContent = scor;
  }
  if (v > 700) {
    v = -40;
  }
  requestAnimationFrame(moveBg);
  v += 3;
  console.log(scor);
  cukctus.style.right = `${v}px`;
  setTimeout(() => move(0 + 1), 10);
}

var y = 0;
var body = document.querySelector(".dinosour__box");

function moveBg() {
  y--;
  body.style.backgroundPosition =  y + "px " + "90%";
}