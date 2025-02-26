let answer;
let znak = "";

document.querySelector("#dor").addEventListener("click" , (e) => {
    e.preventDefault();
    const a = Number(document.querySelector("#firste").value);
    const b = Number(document.querySelector("#seconde").value);
    if(document.querySelector("#firste").value == "" && document.querySelector("#seconde").value == ""){
        document.querySelector("#firste").style.border = "3px solid red" 
        document.querySelector("#seconde").style.border = "3px solid red"
        answer = 'поржньо';
    }else if(document.querySelector("#firste").value == ""){
                document.querySelector("#seconde").style.border = "none"
        document.querySelector("#firste").style.border = "3px solid red" 
        answer = 'тут поржньо';
    }else if(document.querySelector("#seconde").value == ""){
        document.querySelector("#firste").style.border = "none" 
        document.querySelector("#seconde").style.border = "3px solid red" 
        answer = 'тут поржньо';
    }else if(isNaN(a) && isNaN(b)){
        document.querySelector("#firste").style.border = "3px solid red" 
        document.querySelector("#seconde").style.border = "3px solid red"
        answer = 'Це не числа';
    }else if(isNaN(a)){
                document.querySelector("#seconde").style.border = "none"
        document.querySelector("#firste").style.border = "3px solid red" 
        answer = 'Це не число';
    }else if(isNaN(b)){
        document.querySelector("#firste").style.border = "none" 
        document.querySelector("#seconde").style.border = "3px solid red" 
        answer = 'Це не число';
    }else if(znak === ""){
        document.querySelector("#plu").style.border = "2px solid red" 
        document.querySelector("#mno").style.border = "2px solid red" 
        document.querySelector("#min").style.border = "2px solid red" 
        document.querySelector("#dil").style.border = "2px solid red" 
        answer = 'оберіть знак';
    }else{
        document.querySelector("#firste").style.border = "none" 
        document.querySelector("#seconde").style.border = "none"
        document.querySelector("#plu").style.border = "none" 
        document.querySelector("#mno").style.border = "none" 
        document.querySelector("#min").style.border = "none" 
        document.querySelector("#dil").style.border = "none" 
    if(znak == "+"){
        answer = a + b;
    }else if(znak == "-"){
        answer = a - b;
    }else if(znak == "*"){
        answer = a * b;
    }else if(znak == "/"){
        if(b == 0){
            answer = "на нуль ділити не можна"
        }else {
            answer = a / b;
        }
    }
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