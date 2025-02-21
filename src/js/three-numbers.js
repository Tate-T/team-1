function threeNum() {
    let max = Math.max(
        Number(document.querySelector("#threeone").value),
        Number(document.querySelector("#threetwo").value),
        Number(document.querySelector("#threethree").value)
    );

    if (max !== "") {
        document.querySelector(".three__span").textContent = max;
    }
}

document.querySelectorAll("#threeone, #threetwo, #threethree").forEach(input => {
    input.addEventListener("change", threeNum);
});
