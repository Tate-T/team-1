let max = 0;
document.querySelector("#threethree").addEventListener("change", () => {
    if(document.querySelector("#threetwo").value !== "" && document.querySelector("#threeone").value  !== ""){
        if(max < document.querySelector("#threeone").value){
            max = document.querySelector("#threeone").value;
        }

        if(max < document.querySelector("#threetwo").value){
            max = document.querySelector("#threetwo").value;
        }
        
        if(max < document.querySelector("#threethree").value){
            max = document.querySelector("#threethree").value;
        }
        document.querySelector(".three__span").textContent = max;
    }
});