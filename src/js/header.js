const games =  [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',

  },
  {
      id: 2,
      name: 'Вгадай число',
      category: 'numerical',

    },
    {
      id: 3,
      name: 'Камінь-Ножиці-Папір',
      category: 'game',

    },
    {
      id: 4,
      name: 'Калькулятор',
      category: 'numerical',

    },
    {
      id: 5,
      name: 'Калькулятор часу',
      category: 'numerical',

    },
    {
      id: 6,
      name: 'Google динозаврик',
      category: 'game',

    },
    {
      id: 7,
      name: 'Футбол',
      category: 'game',

    },
    {
      id: 8,
      name: 'Найбільше число',
      category: 'numerical',

    },
    {
      id: 9,
      name: 'Наша команда',
      category: 'acquaintance',

    },
    {
      id: 10,
      name: 'Вчений',
      category: 'acquaintance',

    },
    {
      id: 11,
      name: 'Квадратний корінь',
      category: 'numerical',

    },
    {id: 12,
    name: 'Google game',
    category: 'game',

  },
]

document.querySelector("#all").addEventListener("click", () => {
  games.forEach(element => {
    document.querySelector(`#section-${element.id}`).style.display = "block";
  });
});

document.querySelector("#numerical").addEventListener("click", () => {
    games.forEach(element => {
      document.querySelector(`#section-${element.id}`).style.display = "none";
    });
    games.forEach(element => {
      if(element.category === "numerical"){
      document.querySelector(`#section-${element.id}`).style.display = "block";
      }
    });
});


document.querySelector("#game").addEventListener("click", () => {
    games.forEach(element => {
      document.querySelector(`#section-${element.id}`).style.display = "none";
    });
    games.forEach(element => {
      if(element.category === "game"){
      document.querySelector(`#section-${element.id}`).style.display = "block";
      }
    });
});


document.querySelector("#acquaintance").addEventListener("click", () => {
    games.forEach(element => {
      document.querySelector(`#section-${element.id}`).style.display = "none";
    });
    games.forEach(element => {
      if(element.category === "acquaintance"){
      document.querySelector(`#section-${element.id}`).style.display = "block";
      }
    });
});

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

let test = 0;
const cont = document.querySelectorAll(".container");
console.log(cont);

const headerSwich = header.querySelector(".header__lable");
headerSwich.addEventListener("change", () => {
    if(test === 0){
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
          document.querySelector('.scientist').querySelectorAll('p ,h3').forEach(element => {
            element.style.color = 'black';
          }); 
          document.querySelector('.dinosour__minitext').style.color = 'black';
          document.querySelector(".header").style.backgroundColor = '#212121';
          document.querySelector(".footer").style.backgroundColor = '#212121';
          document.querySelector(".dinosour__box").style.backgroundColor = '#FFF';
        test = 1;
    }else if(test === 1){
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
        document.querySelector(".rps__comp").style.color= "white";
            test = 0;
    }

});


