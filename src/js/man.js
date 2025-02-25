document.querySelector('.man__button').addEventListener("click" ,() => {
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
const man = document.querySelector("#man");
const moto = document.querySelector("#moto");
let manPos = man.getBoundingClientRect();
let motoPos = moto.getBoundingClientRect();
document.querySelector(".man__box").addEventListener("click", () => {
  if (play === 0) {
    move();
    play = 1;
  } else if (play === 1) {
    play = 2;
  }
});

document.addEventListener("keydown", (e) => {
  if(e.code === "ArrowUp" || e.code === "Space"){
      e.preventDefault();
  }
  if(e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space"){
  jump();
  }
});

function jump() {
  man
    .querySelector("use")
  man.style.animation = "ease-out 1.3s man";
  setTimeout(() => {
    man
      .querySelector("use")
    man.style.animation = "none";
  }, 1300);
}

function move() {
  let manPosi = man.getBoundingClientRect();
  let motoPosi = moto.getBoundingClientRect();
  if (play === 2) {
    play = 0;
    return;
  }
  if (
    manPosi.right > motoPosi.left &&
    manPosi.left < motoPosi.right &&
    manPosi.bottom > motoPosi.top &&
    manPosi.top < motoPosi.bottom
  ) {
    
    v = -40;
    scor = 0;
    document.querySelector(".man__minitext").textContent = scor;
        play = 2;
  }
  if (Math.abs(manPosi.left - motoPosi.left) < 1.5) {
    scor++;
    document.querySelector(".man__minitext").textContent = scor;
  }
  if (v > 700) {
    v = -40;
  }
  requestAnimationFrame(moveBg);
  v += 3;
  console.log(scor);
  moto.style.right = `${v}px`;
  setTimeout(() => move(0 + 1), 10);
}

let y = 0;
let body = document.querySelector(".man__box");

function moveBg() {
  y--;
  body.style.backgroundPosition =  y + "px " + "90%";
}