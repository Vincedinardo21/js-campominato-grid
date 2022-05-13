let livello;
let griglia = document.querySelector(".grid");

// Inserisco il livello di difficoltà
// Controllo che il livello sia da 1 - 3
do {
    livello = parseInt(prompt("Inserisci il livello di difficoltà da 1 a 3:"));
} while(livello > 3 || livello <= 0);

// Analizzo i vari livelli
switch(livello){
    case 1:
        console.log("livello 1");
        break;
    case 2:
        console.log("livello 2");
        break;
    case 3:
        console.log("livello 3");
        break;
}

// Funzioni
function createMyElement(){
    let node = document.createElement("div");
    node.className = "square";
    return node;
}

