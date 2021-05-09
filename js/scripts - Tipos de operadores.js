// Operadores matematicos

let a = 5;
let b = 2;
let usuario = 'Meraxes';
let saludo = ' Bienvenido';

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log('Hola ' + usuario + saludo); 
    /*Signo de mas (+) sirve tambien como concatenacion, esto quiere decir que nos sirve para unir palabras o strings */

// Operadores incremento / decremento

let c = 8;

console.log(c);
console.log(c++); /* El operador de incremento con los signos despues del valor de la variable hace que devuelva el mismo valor que el anterior de forma seguida, pero al volver a declarar la variable para mostrar en consola por debajo, el valor de la variable es cuando surte efecto y aumenta su valor en 1*/
console.log(c);
console.log(++c); /* El operador de incremento con los signos antes del valor de la variable lo incrementa en 1 de forma instantanea, por lo tanto el valor lo devuelve enseguida con el incremento ya realizado */

let d = 10

console.log(d--); /* El operador de decremento con los signos despues del valor de la variable hace que devuelva el mismo valor que el anterior de forma seguida, pero al volver a declarar la variable para mostrar en consola por debajo, el valor de la variable es cuando surte efecto y disminuye su valor en 1*/
console.log(d);
console.log(--d); /* El operador de decremento con los signos antes del valor de la variable lo disminuye en 1 de forma instantanea, por lo tanto el valor lo devuelve enseguida con la disminucion ya realizada */

// Operadores de Asignacion

let e = 20;
    /* El echo de estar utilizando en la variable un signo de igual (=) ya estamos haciendo uso de uno de los operadores de asignacion */

// e = e + 3;
// console.log(e);
e+=3;
console.log(e);
    /* Esto es lo mismo que lo de arriba pero declarado de una forma distinta, sin embargo en los resultados podemos ver que arroja los mismo ya sea declarado de una u otra forma */
e-=3;
console.log(e);
e*=3;
console.log(e);
e/=3;
console.log(e);
e%=3;
console.log(e);

// Prueba de los operadores de incremento y decremento

let f = 1;
console.log(f);
console.log(f++);
console.log(f);

let g = 3;
console.log(g);
console.log(++g);

let h = 1;
console.log(h);
console.log(h--);
console.log(h);

let i = 3;
console.log(i);
console.log(--i);