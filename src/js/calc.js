let answer;
let znak;

document.querySelector("#dor").addEventListener("click" , (e) => {
    const a = Number(document.querySelector("#firste").value);
    const b = Number(document.querySelector("#seconde").value);
    e.preventDefault();
    if(znak == "+"){
        answer = a + b;
    }else if(znak == "-"){
        answer = a - b;
    }else if(znak == "*"){
        answer = a * b;
    }else if(znak == "/"){
        answer = a / b;
    }
document.querySelector(".calc__answer").textContent = answer;
});

document.querySelector("#plu").addEventListener("click" , (e) => {
e.preventDefault();
     znak = "+";
});

document.querySelector("#mno").addEventListener("click" , (e) => {
    e.preventDefault();
    znak = "*";
});

document.querySelector("#min").addEventListener("click" , (e) => {
    e.preventDefault();
    znak = "-";
});

document.querySelector("#dil").addEventListener("click" , (e) => {
    e.preventDefault();
     znak = "/";
});