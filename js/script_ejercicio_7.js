/* 7.- Crea 3 arrays. el primero tendra 5 números, el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array impares. Muestra por consola:
    - la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    - el array de pares o impares */

const numbers = [19, 28, 31, 47, 56]
let pares = []
let impares = []
// let random

for(const number of numbers){
    let random = Math.round(Math.random() * 10 + 1) 
    // random = Math.round(Math.random() * 10 + 1)
    let result = number * random
    // const result = number * Math.round(Math.random() * 10 + 1)

console.log(`${number} * ${random} = ${result}`);

if(result % 2 == 0){
    pares.push(result)
    }else{
    impares.push(result)
    }
}

console.log(pares);
console.log(impares);

//  Esta es la forma en la que yo lo estaba haciendo, sin embargo despues del if empece a estar mal, ademas de no habia creado una variable para almacenar el resultado en la multiplicacion del number * el math.random que servira como contenedor para almacenar el numero hasta saber si es par o impar y poderlo arrojar al array correspondiente. Adicional a esto, no me iba a quedar nunca ya que era necesario ocupar el .push() el cual sirve para empujar o guardar el resultado en el array correspondiente. Adicional estaba generando el numero aleatorio de manera diferente, tambien podemos conseguirlo como lo hizo dorian, esto daria un numero aleatorio pero con uno de mas por la suma, sin embargo el primer numero seria aleatorio aunque el segundo ya no lo fuera tal cual por dicha suma, pero sirve mientras no exceda el num 10 

/* for(let number of numbers){
    number * Math.round(Math.random() * (10 - 1) * 1)
    if(number % 2 == 0){
        pares = number
    }else{
        impares = 0
    }
} */