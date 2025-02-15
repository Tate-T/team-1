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
        headerList.style.transform = "scale(1)"
        isHeaderTreu = 1;
    }else if(isHeaderTreu === 1){
            headerList.classList.remove("header__true");
            headerList.style.transform = "scale(0)"
            isHeaderTreu = 0;
    }
});

let t = 0;
const cont = document.querySelectorAll(".container");
console.log(cont);

const headerSwich = header.querySelector(".header__lable");
headerSwich.addEventListener("change", () => {
    if(t === 0){
        document.querySelector(".header__circle").style.transform = "translate(100%)";
        document.querySelectorAll('.container').forEach(element => {
            element.style.backgroundColor = '#212121';
          });
          document.querySelectorAll('h2').forEach(element => {
            element.style.color = 'white';
          });      
          document.querySelectorAll('a').forEach(element => {
            element.style.color = 'white';
          });  
          document.querySelectorAll('p').forEach(element => {
            element.style.color = 'white';
          });    
          document.querySelectorAll('h1').forEach(element => {
            element.style.color = 'white';
          });    
          document.querySelectorAll('h3').forEach(element => {
            element.style.color = 'white';
          }); 
          document.querySelector(".header").style.backgroundColor = '#212121';
          document.querySelector(".footer").style.backgroundColor = '#212121';
        t = 1;
    }else if(t === 1){
        document.querySelectorAll('.container').forEach(element => {
            element.style.backgroundColor = '#FFF';
          });
          document.querySelectorAll('h2').forEach(element => {
            element.style.color = 'black';
          });      
          document.querySelectorAll('a').forEach(element => {
            element.style.color = 'black';
          });  
          document.querySelectorAll('p').forEach(element => {
            element.style.color = 'black';
          });    
          document.querySelectorAll('h1').forEach(element => {
            element.style.color = 'black';
          });    
          document.querySelectorAll('h3').forEach(element => {
            element.style.color = 'black';
          }); 
          document.querySelector(".header").style.backgroundColor = '#FFF';
          document.querySelector(".footer").style.backgroundColor = '#FFF';
        document.querySelector(".header__circle").style.transform = "translate(0px)";
            t = 0;
    }

});


