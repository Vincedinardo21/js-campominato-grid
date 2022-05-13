let livello;
let griglia = document.querySelector(".grid");

// Inserisco il livello di difficoltà
// Controllo che il livello sia da 1 - 3
do {
    livello = parseInt(prompt("Inserisci il livello di difficoltà da 1 a 3:"));
} while(livello > 3 || livello <= 0);

if(livello === 1){
    for(let i = 0; i < 100; i++){
        let divEl = createMyElement();
        griglia.append(divEl);
    }
}

// Funzioni
function createMyElement(){
    let node = document.createElement("div");
    node.className = "square";
    return node;
}

