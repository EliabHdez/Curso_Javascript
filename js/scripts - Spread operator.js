/* 
    Spread operator (operador de expansión)

    Su sintaxis es: ...

    - Enviar elementos de un array a una función
    - Añadir un array a otro array
    - Copiar arrays
    - Concatenar arrays
    - Enviar un número indefinido de argumentos a una función (paramétros REST)
    - libreria math
    - Eliminar elementos duplicados
*/

console.log('------------sintaxis-----------');
const number = [-12, 2, 3, 23, 43, 2, 3]

console.log(...number);

// - Enviar elementos de un array a una función

console.log('------------enviar elementos-----------');
const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}

let numbersToAdd = [1, 2, 3]

addNumbers(...numbersToAdd)

// Añadir un array a otro array

console.log('------------añadir arrays-----------');
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

let newUsers = ['marta', 'jaime', 'laura']

users.push(...newUsers)
// users.unshift(...newUsers)
// users.splice(4,0,...newUsers)
    // Podemos ocupar cualquier metodo para agregar elementos al array junto con el spread operator

console.log(users);

// Copiar array

console.log('------------copiar arrays-----------');
let array1 = [1, 2, 3, 4, 5]
let array2 = [...array1]

console.log(array2);

// Concatenar arrays

console.log('------------concatenar arrays-----------');
let array3 = [1, 2, 3, 4, 5]
let array4 = [6, 7, 8]

// let arrayConcat = array3.concat(array4) - Esta es una forma de hacerlo
let arrayConcat = [...array3, ...array4]
console.log(arrayConcat);

// Enviar un número indefinido de argumentos a una función (parámetros REST)

console.log('------------enviar un número definido de argumentos-----------');

const restParms = (...parametros) => { /* Dentro de los parantesis podemos poner el nombre que queramos */
    console.log(parametros);
}

restParms(1,2,3,4,5)

// libreria math

console.log('------------libreria math-----------');
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(numbers)); // Da NaN porque no puede sacar el min o max de un array
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Eliminar elementos duplicados

console.log('------------eliminar elementos duplicados-----------');
const numbers2 = [-12, 2, 3, 23, 43, 2, 3]

console.log(new Set(numbers2)); // new Set lo que hace es que no permite elementos duplicados, sin embargo es eso, un set, digamos que asi es como aparece en consola, si queremos que sea o hacerlo un array tenemos que ponerlo dentro de corchetes, como en el ejemplo de abajo
console.log([...new Set(numbers2)]);