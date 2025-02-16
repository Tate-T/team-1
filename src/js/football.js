const stadium = document.querySelector(".football__stadium")
const ball = document.querySelector(".football__ball")

stadium.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();

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

    ball.style.transform = `translate(${ballCoords.left}px, ${ballCoords.top}px) rotate(${ballCoords.left}deg)`
    console.log(ballCoords.left, ballCoords.left)
  }

  const pointOne = document.querySelector("#one")
  const pointTwo = document.querySelector("#one")
  const pointThree = document.querySelector("#one")
  
  let randomNum = Math.round(Math.random() * (666 - 1) + 1);


