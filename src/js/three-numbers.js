function threeNum() {
    let max = 0;
    if(document.querySelector("#threetwo").value !== "" && document.querySelector("#threeone").value  !== "" && document.querySelector("#threethree").value  !== ""){
        if(max < document.querySelector("#threeone").value){
            console.log(document.querySelector("#threeone").value);
            max = document.querySelector("#threeone").value;
        }

        if(max < document.querySelector("#threetwo").value){
            console.log(document.querySelector("#threetwo").value);
            max = document.querySelector("#threetwo").value;
        }
        
        if(max < document.querySelector("#threethree").value){
            console.log(document.querySelector("#threethree").value);
            max = document.querySelector("#threethree").value;
        }
        document.querySelector(".three__span").textContent = max;
    }
}
document.querySelector("#threethree").addEventListener("change", () => {
threeNum();
});

document.querySelector("#threetwo").addEventListener("change", () => {
    threeNum();
});

document.querySelector("#threeone").addEventListener("change", () => {
    threeNum();
});