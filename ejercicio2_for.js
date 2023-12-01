//2. Pide un texto y luego muestra el número de vocales que contiene.

const input = require("prompt-sync")({sigint: true});

const cadena = input("Escribe eltexto para que te cuente las vocales ==> ")
// console.log("DEBUG ==> " + cadena)
// console.log("DEBUG ==> " + cadena.length)
const frase = cadena.toLowerCase()

//contador
let VocalesTotales = 0


for (let i = 0; i < frase.length; i++) {
    if (
    frase.charAt(i)==="a" ||
    frase.charAt(i)==="e" ||
    frase.charAt(i)==="i" ||
    frase.charAt(i)==="o" ||
    frase.charAt(i)==="u"
    ){
        VocalesTotales = VocalesTotales + 1
        // console.log("DBG.VocalesTotales -> ", VocalesTotales)
    } 
}
console.log("Las vocales totales son ==> " + VocalesTotales);

// if (cadena !=Number){
//     CharacterData(A,E,I,O,U,a,e,i,o,u)
// }else{
//     console.log("No acepto numeros vuelve a intentar")
// }

