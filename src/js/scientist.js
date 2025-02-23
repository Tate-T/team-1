const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

let idButton 

document.querySelector("#btn-born-19century").addEventListener("click", () => {
document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(element.born > 1800 && element.born < 1900){
        const firstTask = element.id;
        document.querySelector(`#scientist-${firstTask}`).style.border = "2px, red, solid";
            
        }
    });
});

document.querySelector("#btn-einstein-birth").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
    });
        document.querySelector(`#scientist-1`).style.border = "2px, red, solid";    
});

document.querySelector("#btn-sort-alphabetically").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    let order = 0;
    let scientistsName = [];
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "2px, red, solid";
        scientistsName.push(element.name);

    });
    scientistsName.sort((a, b) => a.localeCompare(b))
    console.log(scientistsName);
    scientistsName.forEach(element => {
        for(let i = 0; i < scientists.length; i++){
            if(element == scientists[i].name){
                const threeTask = scientists[i].id;
                document.querySelector(`#scientist-${threeTask}`).style.order = order;
                order ++;
            }
        }
    });
    order = 0;
});

document.querySelector("#btn-surname-c").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(element.surname[0] == "C"){
        const fourTask = element.id;
        document.querySelector(`#scientist-${fourTask}`).style.border = "2px, red, solid";
            
        }
    });
});


document.querySelector("#btn-sort-lifespan").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    let order = 0;
    let scientistsName = [];
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "2px, red, solid";
        scientistsName.push(element.dead - element.born);

    });
    scientistsName.sort((a, b) => a-b)
    console.log(scientistsName);
    scientistsName.forEach(element => {
        for(let i = 0; i < scientists.length; i++){
            if(element == scientists[i].dead - scientists[i].born){
                const threeTask = scientists[i].id;
                document.querySelector(`#scientist-${threeTask}`).style.order = order;
                order ++;
            }
        }
    });
    order = 0;
});

document.querySelector("#btn-delete-a").addEventListener("click", () => {
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(element.name[0] == "A"){
        const fourTask = element.id;
        document.querySelector(`#scientist-${fourTask}`).textContent = "";
        }
    });
});


document.querySelector("#btn-latest-born").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    let min = 0;
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(min < element.born){
            min = element.born;
        }
    });
    scientists.forEach(element => {
        if(min == element.born){
            const sixTask = element.id;
            document.querySelector(`#scientist-${sixTask}`).style.border = "2px, red, solid";
        }
    })
});


document.querySelector("#btn-longest-shortest-lived").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    let min = 0;
    let max = 0;
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(max < element.dead - element.born){
            max = element.dead - element.born;
        }
        
    });
    min = max;
    scientists.forEach(element => {
        if(min > element.dead - element.born){
            min = element.dead - element.born;
        }
    })
    scientists.forEach(element => {
        document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
            if(max == element.dead - element.born){
                const sevenTask = element.id;
                document.querySelector(`#scientist-${sevenTask}`).style.border = "2px, red, solid";
            }
            if(min == element.dead - element.born){
                const sevenTask = element.id;
                document.querySelector(`#scientist-${sevenTask}`).style.border = "2px, red, solid";
            }
    });
});


document.querySelector("#btn-same-initials").addEventListener("click", () => {
    document.querySelector("#scientist-9").innerHTML = ' <h3 class="scientist__name">Ada Lovelace</h3>  <p class="scientist__born">1815 - 1852</p> ';
document.querySelector("#scientist-1").innerHTML = ' <h3 class="scientist__name">Albert Einstein</h3>  <p class="scientist__born">1879 - 1955</p>';
    scientists.forEach(element => {
        idButton = element.id;
        document.querySelector(`#scientist-${idButton}`).style.border = "none";
        if(element.surname[0] == element.name[0]){
        const fourTask = element.id;
        document.querySelector(`#scientist-${fourTask}`).style.border = "2px, red, solid";
            
        }
    });
});
