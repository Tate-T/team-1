const inputQuess = document.querySelector(".quess__inpu");
console.log(inputQuess);
document.querySelector(".quess__button").addEventListener("click", (e) => {
    e.preventDefault()
    const rundNum = Math.round(Math.random() * (10 - 0) + 0);
    console.log(rundNum);
    console.log(Number(inputQuess.value));
    console.log(Number(inputQuess.value) == rundNum);
    if(Number(inputQuess.value) == rundNum){
        document.querySelector(".quess__answer").style.display = "flex"
        document.querySelector(".quess__answer").style.color = "#039900";
        document.querySelector(".quess__answer").innerHTML = 'Вітаю, ви вгадали число!<span class="quess__span"> </span>';
        document.querySelector(".quess__span").textContent = ` ${rundNum}`;
    }else{
         document.querySelector(".quess__answer").style.display = "flex"
        document.querySelector(".quess__answer").style.color = "#900";
        document.querySelector(".quess__answer").innerHTML = 'Ви програли, комп’ютер загадав <span class="quess__span"> </span>';
        document.querySelector(".quess__span").textContent = ` ${rundNum}`;
    }
});