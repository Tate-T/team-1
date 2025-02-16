const threeSpan =  document.querySelector(".three__span");
let max = 0;
document.querySelector("#threethree").addEventListener("change", () => {
    if(Number(document.querySelector("#threesecond").value)!== 0 && Number(document.querySelector("#threefirst").value) !== 0){
        if(Number(document.querySelector("#threefirst").value) > max){
            max = Number(document.querySelector("#threefirst").value)
        }
         if(Number(document.querySelector("#threesecond").value) > max){
            max = Number(document.querySelector("#threesecond").value)
        }
        if(Number(document.querySelector("#threethree").value) > max){
            max = Number(document.querySelector("#threethree").value)
        }
        threeSpan.textContent = max;
    }
})