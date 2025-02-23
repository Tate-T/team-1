document.querySelector(".squad__button").addEventListener("click", (e) => {
    e.preventDefault();
    let cvadrat = -1;
    for(let i = 0; i < Number(document.querySelector(".squad__inpu").value); i++){
      if(i * i == Number(document.querySelector(".squad__inpu").value)){
        cvadrat = i;
      }
    }
    if(cvadrat !== -1){
        document.querySelector(".squad__answer").style.display = "flex"
        document.querySelector(".squad__answer").style.color = "#039900";
        document.querySelector(".squad__answer").innerHTML = 'Квадрат цього числа  <span class="squad__span"> </span>';
        document.querySelector(".squad__span").textContent = ` ${cvadrat}`;
    }else if(cvadrat == -1){
                 document.querySelector(".squad__answer").style.display = "flex"
        document.querySelector(".squad__answer").style.color = "#900";
        document.querySelector(".squad__answer").innerHTML = 'В цього числа немає цілого квадрата';
    }
});