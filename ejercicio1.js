const input = require("prompt-sync")({sigint: true});

let botella = 0.5;
let botellasnecesarias="";

const numerocomensales = input("Introduce el numero de comensales ==> " )
console.log("Has reservado para: " + numerocomensales)

const cebolla = input("Introduce el numero de comensales que les gusta la tortilla con cebolla ==> ")
console.log("Has dicho que de ==> " + numerocomensales + " solo les gusta con cebolla a ==> "+ cebolla)

console.log("Por se da por echo que sin cebolla les gusta a ==> " + (numerocomensales - cebolla))

//el Math.ceil lo pongo para que si hay 4.5 botellas se redondee a 5 porque rese
if (botellasnecesarias = Math.ceil(numerocomensales * botella)){ 
    console.log("Se necesitan ==> " + botellasnecesarias)
    
}


function concebolla(cebolla){

}

function sincebolla(){
    
}
