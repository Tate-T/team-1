document.querySelector(".squad__button").addEventListener("click", (e) => {
    e.preventDefault();
    let cvadrat = -1;
    for(let i = 0; i < Number(document.querySelector(".squad__inpu").value); i++){
      if(i * i == Number(document.querySelector(".squad__inpu").value)){
        cvadrat = i;
      }
    }
    if(document.querySelector(".squad__inpu").value === ""){
      document.querySelector(".squad__answer").style.display = "flex"
      document.querySelector(".squad__answer").style.color = "grey";
      document.querySelector(".squad__answer").innerHTML = 'тут порожньо';
    }else if(cvadrat !== -1){
        document.querySelector(".squad__answer").style.display = "flex"
        document.querySelector(".squad__answer").style.color = "#039900";
        document.querySelector(".squad__answer").innerHTML = 'Квадрат цього числа  <span class="squad__span"> </span>';
        document.querySelector(".squad__span").textContent = ` ${cvadrat}`;
    }else if(isNaN(Number(document.querySelector(".squad__inpu").value))){
      document.querySelector(".squad__answer").style.display = "flex"
      document.querySelector(".squad__answer").style.color = "gray";
      document.querySelector(".squad__answer").innerHTML = 'Це не число';
  }else if(Number(document.querySelector(".squad__inpu").value) < 0){
      document.querySelector(".squad__answer").style.display = "flex"
      document.querySelector(".squad__answer").style.color = "gray";
      document.querySelector(".squad__answer").innerHTML = 'Це число не підходить, тільки додатні числа';
  }else{
        document.querySelector(".squad__answer").style.display = "flex"
        document.querySelector(".squad__answer").style.color = "#900";
        document.querySelector(".squad__answer").innerHTML = 'В цього числа немає цілого квадрата';
    }
});