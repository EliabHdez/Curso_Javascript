//  Strings

let saludo = 'Hola Mundo';

/* PROPIEDADES
    length --> Devuelve la longitud de la cadena */

//  Con "devolver" nos referimos a la respuesta que nos entrega en programa o la consola. Esto quiere decir que es la respuesta a los que le estamos pidiendo. Por ej en el caso anterior le estamos pidiendo que nos de la longitud de la cadena saludo y no lo que vale saludo, por o tanto la consola nos mostrara los caracteres totales de la(s) palabra(s) que contenga la cadena saludo contando tambien los espacios 

/* METODOS
    Todos los métodos devuelven una cadena nueva, la cadena original no será modificada
    
    - toUpperCase() --> Devuelve la cadena a mayúsculas
    - toLowerCase() --> Devuelve la cadena a minúsculas
    - indexOf(string) --> Devuelve la posicion en la que se encuentra el valor buscado o bien la primera coincidencia con este, si no lo encuentra devuelve -1
    - replace(valor a buscar, valor nuevo) --> Reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo
    - substring(inicio [, fin]) --> Extrae los caracteres desde inicio hasta fin (el final no se incluye) (Los corchetes solo representan que es un valor opcional, estos no se ponen. ej (5, 9))
        Si no se incluye el fin extrae hasta el final
    - slice(inicio [, fin]) --> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás
        ej: (2, -4) - Empieza a contar en el tercer caracter y los 4 últimos no los considera. 
        (Los corchetes solo representan que es un valor opcional, estos no se ponen. ej (5, 9))
            Si no se incluye el final extrae hasta el final
    - trim() --> Elimina los espacios al inicio y al final de la cadena

    -- ES6 --

    - startsWith(valor [, inicio]) --> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false
    - endsWith(valor [, longitud]) --> Sirve para saber si la cadena termina con ese valor. Devuelve true o false
    - includes(valor[, inicio]) --> Igual que indexOf pero devuelve true o false
    - repeat(valor) --> Repite el string el  numero de veces que le indiquemos
    - emplate Strings

    ES IMPORTANTE RECORDAR QUE CUENTA EL 0 COMO PRIMERA POSICION, ESTO QUIERE DECIR QUE EL CONTEO DE POSICIONES SERA 0, 1, 2, 3... ETC, POR LO TANTO SI TENEMOS UNA CADENA QUE SEA "HOLA" LA H OCUPA LA POSICION 0, O LA POSICION 1 Y ASI SUCESIVAMENTE
*/
console.log(saludo);

// length

console.log(saludo.length); 
    /* Los espacios tambien cuentan como un caracter que se sumara a la longitud (length) de la cadena */

// toUpperCase()

console.log(saludo.toUpperCase());

// toLowerCase()

console.log(saludo.toLowerCase());

// Podemos guardar la cadena en mayusculas o minusculas como una variable de la siguiente forma con el nombre que queramos en la cadena

    // let saludoMayus = saludo.toUpperCase();
    // let saludoMinus = saludo.toLowerCase();

// indexOf(string)

console.log(saludo.indexOf('Hola')); /* Primera coincidencia letra "H" */
console.log(saludo.indexOf('Mundo')); /* Primera coincidencia letra "M" */
console.log(saludo.indexOf('un')); /* Primera coincidencia letra "u" */
console.log(saludo.indexOf('o')); /* Valor letra "o" */
console.log(saludo.indexOf('n')); /* Valor letra "n" */
    //  El indexOf a la primera posicion la asigna como 0, en otras palabras numericamente va desfasado 1 lugar ya que el 0 lo cuenta como una posicion

// replace(valor a buscar, valor nuevo)

console.log(saludo.replace('Mundo', 'Eliab'));

// substring(inicio [, fin])

console.log(saludo.substring(3));
console.log(saludo.substring(3, 8));
// El caracter final no lo incluye, por lo tanto en este ejemplo no muestra el caracter que ocupa la posicion 8, muestra hasta el caracter que ocupa la posicion 7
console.log(saludo.substring(3, 8-1));

    // Como podemos observar los corchetes no se ponen en el caso de llevar un segundo valor o un valor "final", solo se utiliza la coma para su separacion e indicar que hay un valor inicial y uno final

// slice(inicio [, fin])

console.log(saludo.slice(3));
console.log(saludo.slice(-3));
    // Si solo se pone un valor y este es negativo empieza a contar desde atras
console.log(saludo.slice(0, -4));
    // Si se ponen dos valores, el primero debera ser positivo y empezara a contar a partir de este valor, el segundo puede ser negativo y si es negativo son los valores que eliminara empezando el conteo desde atras o de derecha a izquierda

// trim()

let saludo_personal = '    Hola Moises, buenas tardes. Bienvenido   '
let saludo_personal2 = '          Hello World         '
    console.log(saludo_personal);
    console.log(saludo_personal.trim());
    console.log(saludo_personal2);
    console.log(saludo_personal2.trim());

//  -- ES6 --
    //  Los metodos siguientes vinieron con la especificacion nueva de EcmaScript6 (ES6)

// startsWith(valor [, inicio])

console.log(saludo.startsWith('H'));
console.log(saludo.startsWith('h'));
console.log(saludo.startsWith('o'));
console.log(saludo.startsWith('M', 5));

// endsWith(valor [, longitud]) 

console.log(saludo.endsWith('o'));
console.log(saludo.endsWith('a', 4));
console.log(saludo.endsWith('n', 5));
console.log(saludo.endsWith('n', 8));
console.log(saludo.endsWith('Mundo'));
console.log(saludo.endsWith('mundo'));

// includes(valor[, inicio])

console.log(saludo.includes('n')); /* Busca que el valor se encuentre en la cadena/string */
console.log(saludo.includes('a', 5));
console.log(saludo.includes('a', 2));
console.log(saludo.includes('mundo'));
console.log(saludo.includes('Mundo'));

// repeat(string, valor)

let saludo1 = 'Hola ';
let orden = 'Tu solo'
    console.log(saludo1.repeat(3));
    console.log(saludo1.repeat(5));
    console.log('R '.repeat(10));
        // repeat no solo sirve para repetir variables o strings, tambien podemos repetir cualquier letra o palabra que declaremos directamente
    console.log(orden, 'dispara '.repeat(3));

// template strings

let nombre = 'Juan';
let apellido = 'Gómez';
let edad = 20;

console.log('Hola', nombre, apellido,  '. Tu tienes', edad, 'años');
console.log('Hola ' + nombre + ' ' + apellido + '. Tu tienes ' + edad + ' años');
console.log(`Hola ${nombre} ${apellido}. Tu tienes ${edad} años`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años`);