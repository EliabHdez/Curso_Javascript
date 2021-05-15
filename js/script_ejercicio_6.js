/* 6.- Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */

let numbers
let suma = 0
let cont = 0

/* do{
    numbers = parseInt(prompt(`Digíte un número`))
    suma += numbers
    cont++
}while(suma <= 50)

console.log(`El resultado de la suma es ${suma}`)
console.log(`Número total de digítos introducidos: ${cont}`); */

while(suma <=50){
    suma += parseInt(prompt(`Digíta un numero para añadir a la suma`))
    cont++
}

console.log(`El total de los números introducidos es ${suma}`)
console.log(`Número total de digítos introducidos: ${cont}`)

//  El codigo comentado es la forma en la que yo hice el ejercicio, me atore al momento de querer saber cuantos digitos se habian metido, y eso fue porque no sabia que se pueden poner declaraciones directas como el que se ocupo de cont++. Me daba una idea de que me hacia falta una variable que era la de cont pero no estaba seguro de que asi fuera y tampoco de como declararla ni en donde. Lo dejo echo como lo hizo dorian ya que se me hizo una forma mas corta y de cierta mas entendible con respecto a la logica del ejercicio donde primero para saber que tiene que hacer el programa le tenemos que indicar la limitante que tiene y eso es que la suma no supero los 50, y de la forma que yo lo hice primero le decimos al programa que hacer mientras que la suma no supere los 50 y eso se puede prestar para confusion