/* 
    Arrays - Métodos 2

        - .from(iterable) - Convierte en array el elemento iterable
    
        - .sort([callback]) - Ordena los elementos de un array alfabéticamente (valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos

        - .forEach(callback(currentValue, [index])) - Ejecuta la función indicada una vez por cada elemento del array

        - .some(callback) - Comprueba si al menos un elemento del array cumple con la condición

        - .every(callback) - Comprueba si todos los elementos del array cumplen la condición

        - .map(callback) - Transforma todos los elementos del array y devuelve un array nuevo

        - .filter(callback) - Filtra todos los elementos del array que cumplen la condición y devuelve un nuevo array

        - .reduce(callback) - Reduce todos los elementos del array a un único valor
*/

    // .from(iterable)

let word = 'Hola Mundo'

console.log(Array.from(word))
console.log(word.split(''))
console.log(word.split(' '))

    // .sort([callback])

console.log('--------sort----------');
const letters = ['b', 'c', 'z', 'a']
const numbers = [1, 8, 300, 100, 3]

console.log(letters.sort())  // Con sort lo que conseguimos es ordenar alfabéticamente un array, esto lo hace mediante el número unicode asginado a cada letra, número, caracater etc...
console.log(numbers.sort()) // Con los números no funciona tal cual ya que el orden es por unicode, por lo tanto pone primero el 1, seguido del 100 debido al unicode de 1 y 0, despues el 3, despues el 300 de igual manera por el unicode de 3 y 0 y asi sucesivamente
console.log(numbers.sort((a,b)=>a-b)) // Para ordenar de menor a mayor los números necesitamos hacer uso de un callback, que va dentro de los parentesis de la función (sort) donde se le puede poner cualquier valor, pero lo usual es utilizar a y b, seguido de una flecha por fuera del parentesis y restando los valores, si queremos que el orden sea de menor a mayor a menor se pone el primer valor menos el segundo valor, si queremos que sea de mayor a menor ponemos el segundo valor menos el primer valor. Esto lo que hace es recorrer el array  e ir calculando si el primer valor es menor o mayor segun sea el caso que el segundo valor y por medio de esta comparación es que genera el orden de los valores en el array
console.log(numbers.sort((a,b)=>b-a))

    // .forEach(callback(currentValue, [index]))

console.log('------------forEach----------------');
const numbers1 = [12, 25, 47, 84, 98]

numbers1.forEach((element) => console.log(element)) // Esto es una forma mas sencilla de hacer lo que hariamos con un for of o for in
numbers1.forEach((element, index) => console.log(`${element} esta en la posición 
${index}`)) // Además podemos conseguir el resultado del for of y for in en una sola linea de codigo con el element (este puede llevar cualquier nombre, sin embargo normalmente se usa element) y el index

    // .some(callback)

console.log('-------------some---------------');
const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(words.some(word => word.length > 10));
console.log(words.some(word => word.length > 3));
console.log(words.some(word => word.length < 3));

    // - .every(callback)

console.log('--------------every--------------');
console.log(words.every(element => element.length = 10));
console.log(words.every(element => element.length > 10));
console.log(words.every(element => element.length > 2));

    // .map(callback)

console.log('-------------map---------------');
const numbers2 = [12, 25, 47, 84, 98]

numbers2.map(number => console.log(number * 2)) // Esto puede ser cualquier acción, no solo una operación matemática
    /* Esto viene siendo lo mismo que hacer un for of, pero de forma mas sencilla y directa */
        
for (number of numbers2){
    console.log(number * 2);
}

const numbersMap = numbers2.map(element => element * 2) // Podemos guardar el resultado en un array

console.log(numbersMap);

    // - .filter(callback)

console.log('-------------filter---------------');
const numbers3 = [12, 25, 47, 84, 98]

const numbersFilter = numbers3.filter(element => element > 40)
console.log(numbersFilter);

const numbersFilters = numbers3.filter(element => element < 40)
console.log(numbersFilters);

    // - .reduce(callback)

console.log('-------------reduce---------------');
const numbers4 = [1, 2, 4, 8, 9]

console.log(numbers4.reduce((a,b) => a + b))

const numbersReduce = numbers4.reduce((a,b) => a + b)
const numbersReduce2 = numbers4.reduce((a,b) => a - b)
const numbersReduce3 = numbers4.reduce((a,b) => a * b)

console.log(numbersReduce);
console.log(numbersReduce2);
console.log(numbersReduce3);

console.log('-----------ejercicio de reduce----------');

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: true
    },
    {
        name: 'user 4',
        online: false
    },
    {
        name: 'user 5',
        online: true
    }
]

const usersOnline = users.reduce(
    (cont, user) => {
        if (user.online)
        cont++
        return cont
    },0 // Con esto le damos un valor inicial a 'cont', ya que de lo contrario, si no tiene este valor al momento de imprimir en consola, no estaria arrojando NaN, que quiere decir que cont no tiene un valor numerico, por lo tanto le tenemos que poner el valor inicial de 0 para que apartir de aqui empiece a contar y asi generar el incremento si el if se cumple
)
console.log(`Hay ${usersOnline} usuarios en linea`);