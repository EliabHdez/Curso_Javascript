/* 
    Objeto Math
        Objeto estatico: Esto quiere decir que tenemos que usar su nombre para utilizarlo
        
    Propiedades: 
        Math.E  -  Math.PI
        
    Metodos:
        Math.abs(x): Devuelve el valor oabsoluto de "x"
        Math.ceil(x): Devuelve el entero mas grande mayor o igual que un número
        Math.floor(x): Devuelve el entero mas pequeño menor o igual que un número
        Math.pow(x, y): Devuelve la potencia de "x" elevado a "y"
        Math.random(): Genera un número pseudoaleatorio entre 0 y 1
        Math.round(x): Devuelve el valor de un número redondeado al entero mas cercano
        Math.sqrt(x): Devuelve la raiz cuadrada de "x"
        Math.sign(x): Devuelve 1 | -1 | 0 el valor de "x", donde el resultado devuelto dependera si el valor de "x" es positivo, negativo o cero
*/
console.log(Math.E);
console.log(Math.PI);

let num = 5;
let num1 = -10
let num2 = 8.3
let num3 = 2.9
let num4 = 6

    // Math.abs(x)

console.log(Math.abs(num));
console.log(Math.abs(num1));
console.log(Math.abs(num2));
console.log(Math.floor(17.89));

    // Math.ceil(x)

console.log(Math.ceil(num2));
console.log(Math.ceil(num3)); 
console.log(Math.floor(17.89)); 
    // El entero que devuelve es a la alza, no importan cual sea su valor decimal, siempre el entero sera a la alza

    // Math.floor(x)

console.log(Math.floor(num2));
console.log(Math.floor(num3));
console.log(Math.floor(17.89));
    // El entero que devuelve es a la baja, no importan cual sea su valor decimal, siempre el entero sera a la baja

    // Math.pow(x, y)

console.log(Math.pow(num, 5));
console.log(Math.pow(num4, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 3));
    // Es importante recordar que el primer valor tiene que corresponder a la base y el segundo al exponente. Al menos aqui en js la sintaxis es de esta manera. "Importante tenerlo en cuenta"

    // Math.random()

console.log(Math.random());
console.log(Math.random() * 100);
    // No solo se puede poner solo random para arrojar un numero aleatorio entre el 0 y 1, de echo no es lo habitual, normalmente se suele ocupar con numeros entre 0 y 10, 0 y 100, vaya numeros de 0 para arriba sin que el limite sea el 1. Este se suele hacer multiplicando el random con el numero que queramos
console.log(Math.round(Math.random() * 100));
    // Este se suele o se puede combinar con math.round para redondear el valor aleatorio que nos devuelve el random
/* Tambien podemos utilizar random para obtener un numero aleatorio entre dos numeros en concreto (un minimo y un maximo) esto se hace de la siguiente manera:
    console.log(Math.random() * (max - min)+min); */
console.log(Math.random() * (10 - 5) + 5);
console.log(Math.round(Math.random() * (10 - 5) + 5));
console.log(Math.round(Math.random() * (100 - 50) + 50));

    // Math.round(x)

console.log(Math.round(num2));
console.log(Math.round(num3));
    // math.round si respeta el decimal, redondeando el valor al entero mas cercano ya sea a la baja o alza dependiendo del decimal. De .1 a .4 baja, de .5 a .9 sube
    let num5 = 3.5;
console.log(Math.round(num5));

    // Math.sqrt()

console.log(Math.sqrt(num));
console.log(Math.sqrt(2));
console.log(Math.sqrt(9));

    // Math.sign(x)

console.log(Math.sign(0));
console.log(Math.sign(5));
console.log(Math.sign(-5));