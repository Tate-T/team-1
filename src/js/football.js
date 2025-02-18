let gameActive = false;
let gameInterval = null;
const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__ball");
const scoreDisplay = document.querySelector(".football__text"); 
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const overlay = document.querySelector(".football__overlay");  
let score = 0;

stopButton.disabled = true;

function startGame() {
  if (!gameActive) {
    gameInterval = setInterval(moveCircles, 1100);
    gameActive = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    overlay.style.display = 'none';  
  }
}

function stopGame() {
  if (gameActive) {
    clearInterval(gameInterval);
    gameActive = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    overlay.style.display = 'block';  
  }
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);

stadium.addEventListener("click", (event) => {
    let fieldCoords = stadium.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - stadium.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - stadium.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > stadium.clientWidth) {
        ballCoords.left = stadium.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > stadium.clientHeight) {
        ballCoords.top = stadium.clientHeight - ball.clientHeight;
    }

    ball.style.transform = `translate(${ballCoords.left}px, ${ballCoords.top}px) rotate(${ballCoords.left}deg)`;

    checkCollision(); 
});

const pointOne = document.querySelector("#one");
const pointTwo = document.querySelector("#two");
const pointThree = document.querySelector("#three");

function getRandomPosition(maxX, maxY, size) {
    let x = Math.round(Math.random() * (maxX - size));
    let y = Math.round(Math.random() * (maxY - size));
    return { x, y };
}

function moveCircles() {
    let maxX = stadium.clientWidth;
    let maxY = stadium.clientHeight;
    let size = 50; 

    let pos1 = getRandomPosition(maxX, maxY, size);
    let pos2 = getRandomPosition(maxX, maxY, size);
    let pos3 = getRandomPosition(maxX, maxY, size);

    pointOne.style.transform = `translate(${pos1.x}px, ${pos1.y}px)`;
    pointTwo.style.transform = `translate(${pos2.x}px, ${pos2.y}px)`;
    pointThree.style.transform = `translate(${pos3.x}px, ${pos3.y}px)`;

    checkCollision(); 
}

function checkCollision() {
    let ballRect = ball.getBoundingClientRect();
    let circleRects = [pointOne, pointTwo, pointThree].map(circle => circle.getBoundingClientRect());

    for (let rect of circleRects) {
        if (
            ballRect.left < rect.right &&
            ballRect.right > rect.left &&
            ballRect.top < rect.bottom &&
            ballRect.bottom > rect.top
        ) {
            score++; 
            scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`; 
        }
    }
}
