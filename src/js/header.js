const header = document.querySelector(".header");
console.log(header);
const headerButton = header.querySelector(".header__button");
console.log(headerButton);
const headerList = header.querySelector(".header__acardions");
console.log(headerList);
let isHeaderTreu = 0;
headerButton.addEventListener("click", () => {
    if(isHeaderTreu === 0){
        headerList.classList.add("header__true");
        isHeaderTreu = 1;
    }else if(isHeaderTreu === 1){
            headerList.classList.remove("header__true");
            isHeaderTreu = 0;
    }
});


const headerSwich = header.querySelector(".header__lable");
headerSwich.addEventListener("change", () => {

});