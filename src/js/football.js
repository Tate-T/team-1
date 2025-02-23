let gameDefault = false;
let gameUnlimited = false;
let gameHard = false;
let gameActive = false;
let gameInterval = null;
const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__ball");
const scoreDisplay = document.querySelector(".football__text"); 
const defaultButton = document.querySelector("#default");
const hardButton = document.querySelector("#hard");
const unlimitedButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const overlay = document.querySelector(".football__overlay");  
const pointOne = document.querySelector("#one");
let pointTwo = document.querySelector("#two");
let pointThree = document.querySelector("#three");
let score = 0;

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

function moveCircle() {
    let maxX = stadium.clientWidth;
    let maxY = stadium.clientHeight;
    let size = 50; 

    let pos1 = getRandomPosition(maxX, maxY, size);

    pointOne.style.transform = `translate(${pos1.x}px, ${pos1.y}px)`;

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

            if (score >= 20 && gameUnlimited === false) {
                scoreDisplay.innerHTML = `Вітаю! Ви перемогли!`
                scoreDisplay.style.color = "#039900"
                stadium.style.borderColor = "#039900"
                clearInterval(gameInterval);
                gameActive = false;
                defaultButton.disabled = false;
                unlimitedButton.disabled = false;
                stopButton.disabled = true;
                overlay.style.display = 'block';
            }
        }
    }
}

function unlimitedGame() {
    if (!gameActive) {
      gameInterval = setInterval(moveCircles, 1100);
      pointTwo.classList.add('football__points')
      pointTwo.id = "two"
      pointThree.classList.add('football__points')
      pointThree.id = "three"
      gameActive = true;
      unlimitedButton.disabled = true;
      stopButton.disabled = false;
      overlay.style.display = 'none';  
      stadium.style.backgroundColor = "#5ABB58"
      score = 0
      scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`;
              scoreDisplay.style.color = "#000"
        stadium.style.borderColor = "#000"
        gameDefault = false;
        gameUnlimited = true;
        gameHard = false;
    }
  }

  function defaultGame() {
    if (!gameActive) {
      gameInterval = setInterval(moveCircles, 1100);
      pointTwo.classList.add('football__points')
      pointTwo.id = "two"
      pointThree.classList.add('football__points')
      pointThree.id = "three"
      gameActive = true;
      unlimitedButton.disabled = true;
      stopButton.disabled = false;
      overlay.style.display = 'none';  
              scoreDisplay.style.color = "#000"
        stadium.style.borderColor = "#000"
        stadium.style.backgroundColor = "#5ABB58"
        score = 0
        scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`;
        gameDefault = true;
        gameUnlimited = false;
        gameHard = false;
    }
  }

  
  
  function hardGame() {
      if (!gameActive) {
        gameInterval = setInterval(moveCircle, 600);
        pointTwo.classList.remove('football__points')
        pointTwo.id = "0"
        pointTwo.style.width = "0"
        pointThree.classList.remove('football__points')
        pointThree.id = "0"
        pointThree.style.width = "0"
        gameActive = true;
        unlimitedButton.disabled = true;
        stopButton.disabled = false;
        overlay.style.display = 'none';  
                scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`;
                scoreDisplay.style.color = "#000"
        stadium.style.borderColor = "#000"
        stadium.style.backgroundColor = "#b5330f"
        score = 0
        scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`;
        gameDefault = false;
        gameUnlimited = false;
        gameHard = true;
      }
    }
  
    function stopGame() {
        clearInterval(gameInterval);
        gameActive = false;
        defaultButton.disabled = false;
        unlimitedButton.disabled = false;
        stopButton.disabled = true;
        overlay.style.display = 'block';
        scoreDisplay.innerHTML = `Очків: <span class="football__score">${score}</span>`;
        scoreDisplay.style.color = "#000"
        stadium.style.borderColor = "#000"
        pointThree.style.width = "50px"
        pointTwo.style.width = "50px"
        score = 0
        gameDefault = false;
gameUnlimited = false;
gameHard = false;
    }
  
  unlimitedButton.addEventListener("click", unlimitedGame);
  stopButton.addEventListener("click", stopGame);
  defaultButton.addEventListener("click", defaultGame);
  hardButton.addEventListener("click", hardGame);
