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
document.querySelector(".start").addEventListener("click", () => {
  if (play === 0) {
    document.querySelector(".start").style.backgroundColor = "red";
     document.querySelector(".start").textContent = "stop"
    move();
    play = 1;
  } else if (play === 1) {
    play = 2;
      document.querySelector(".start").style.backgroundColor = "green";
     document.querySelector(".start").textContent = "start"
  }
});


function jump() {
  dino
    .querySelector("use")
  dino.style.animation = "ease-out 1.3s dino";
  setTimeout(() => {
    dino
      .querySelector("use")
    dino.style.animation = "none";
  }, 1300);
}

function move() {
  document.querySelector(".dinosour__box").addEventListener("click", (e) => {
        e.preventDefault();
    jump();
  });
  document.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        e.preventDefault();
    jump();
    }
  });
  let dinoPosi = dino.getBoundingClientRect();
  let cuckPosi = cukctus.getBoundingClientRect();
  if (play === 2) {
          document.querySelector(".start").style.backgroundColor = "green";
     document.querySelector(".start").textContent = "start"
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
        play = 2;
  }
  if (Math.abs(dinoPosi.left - cuckPosi.left) < 1.5) {
    scor++;
    document.querySelector(".dinosour__minitext").textContent = scor;
  }
  if (v > 700) {
    v = -40;
  }
  v += 3;
  cukctus.style.left = `${v}px`;
  setTimeout(() => move(0 + 1), 10);
}