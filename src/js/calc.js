let answer;

document.querySelector("#dor").addEventListener("click" , (e) => {
    e.preventDefault();
document.querySelector(".calc__answer").textContent = answer;
});

document.querySelector("#plu").addEventListener("click" , (e) => {
    const a = Number(document.querySelector("#firste").value);
const b = Number(document.querySelector("#seconde").value);
    e.preventDefault();
     answer = a + b;
});

document.querySelector("#mno").addEventListener("click" , (e) => {
    const a = Number(document.querySelector("#firste").value);
const b = Number(document.querySelector("#seconde").value);
    e.preventDefault();
     answer = a * b;
});

document.querySelector("#min").addEventListener("click" , (e) => {
    const a = Number(document.querySelector("#firste").value);
const b = Number(document.querySelector("#seconde").value);
    e.preventDefault();
     answer = a - b;
});

document.querySelector("#dil").addEventListener("click" , (e) => {
    const a = Number(document.querySelector("#firste").value);
const b = Number(document.querySelector("#seconde").value);
    e.preventDefault();
     answer = a / b;
});