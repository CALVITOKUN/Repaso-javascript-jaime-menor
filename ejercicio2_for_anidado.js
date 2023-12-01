//2. Pide un texto y luego muestra el número de vocales que contiene.

const input = require("prompt-sync")({sigint: true});

const frase = input("Escribe eltexto para que te cuente las vocales ==> ")
const vocales = "aeiouAEIOU"

//contador
let VocalesTotales = 0


for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if(frase.charAt(i) === vocales.charAt(j)){
            VocalesTotales = VocalesTotales +1
        }
    }
}
console.log("Las vocales totales son ==> " + VocalesTotales);


