const input = require("prompt-sync")({sigint: true});


const numerocomensales = input("Cuantos comensales van a ser ?")
const numeroCebollistas= getnumerocebollistas(numerocomensales)
let numerosincebollistas

if (!numeroCebollistas){
    
} else {
    numerosincebollistas = (numerocomensales - numeroCebollistas)
}

function CalcularTortillaSuprema(params){

}

function Calcularsincebolla(numerosincebollistas){
    
}

function getnumerocebollistas(numerocomensales){
    const numeroCebollistas = input ("¿Cuantos comen cebolla?")
    if (numerocomensales < numeroCebollistas){
        return false
    }
    return numeroCebollistas
}