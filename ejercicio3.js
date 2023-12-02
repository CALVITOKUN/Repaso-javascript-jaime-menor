// 3. Pide un año y haz que el programa devuelva si es bisiesto. Esto es, que sea divisible entre 400, o entre 4 y 
// pero que no sea divisible entre 100. El año bisiesto se estableción en 1582 por la bula Inter Gravissimas de Gregorio XIII.

const input = require("prompt-sync")({sigint: true});

const PideAños = input ("Danos un año ==> ")


const esbisiesto = (PideAños % 400 === 0) || ((PideAños % 4 === 0)) && (PideAños % 100 !== 0)

if (esbisiesto){
    console.log(PideAños + " Es un año bisiesto");
} else {
    console.log(PideAños + " No es un año bisiesto");
}