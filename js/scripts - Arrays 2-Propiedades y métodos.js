/* 
    Arrays
    
    Propiedad
        .length: Devulve el número de posiciones que contiene
        
    Métodos
        Array.isArray(): Devuelve true si la variable es un array
        
    Eliminar un elemento
        - .shift(): Elimina el primer elemento de array y devuelve ese elemento
        - .pop(): Elimina el ultimo elemento de un array y devuelve ese elemento
        
    Añadir elementos
        - .push(element1, element2,...): Añade uno o mas elementos al final del array y devuelve la nueva longitud
        - .unshift(element1, element2,...): Añade uno o mas elementos al comienzo del array y devuelve la nueva longitud

        - .indexOf(): Devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

        - .lastIndexOf(): Devuelve el último indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

        - .reverse(): Invierte el orden de los elementos del array

        - .join('separador'): Devuelve un string con el separador que indiquemos, por defecto son comas

        - .splice(a, b, items): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
            a - Indíce de inicio
            b - Número de elementos (opcional)
            items - Elementos a añadir en el caso de que se añadan (opcional)

        - .slice(a, b): Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original
*/

let numbers = [1, 2, 3, 4, 5]
let numbers2 = [1, 2, 3, 4, 5]
let numbers3 = [1, 2, 3, 4, 5]
let numbers4 = [1, 2, 3, 4, 5]
let numbers5 = [1, 2, 3, 4, 5, 2]
let numbers6 = [1, 2, 3, 4, 5, 2, 2]
let numbers7 = [1, 2, 3, 4, 5]
let numbers8 = [1, 2, 3, 4, 5, 10, 15, 20]
let number = 4

    //  Propiedades

//  .length (array.length)

console.log('---------------.length----------------');
console.log(numbers.length)

    //  Métodos

// Array.isArray()

console.log('---------------Array.isArray----------------');
console.log(Array.isArray(number))
console.log(Array.isArray(numbers))

        //  Eliminar elementos de un array
    
    // .shift()

console.log('---------------.shift----------------');
console.log(numbers)
numbers.shift()
console.log(numbers)
let deleteFirstElement = numbers.shift();
console.log(numbers)
console.log(deleteFirstElement);
    //  Podemos guardar el .shift como una variable, la cual como valor arrojara el elemento que se esta eliminando con el .shift
        
        // .pop()

console.log('---------------.pop----------------');
console.log(numbers2);
numbers2.pop();
console.log(numbers2);
let deleteLastElement = numbers2.pop();
console.log(numbers2);
console.log(deleteLastElement);
    //  Podemos guardar el .pop como una variable, la cual como valor arrojara el elemento que se esta eliminando con el .pop

// Tanto para el .shift como el .pop recordar que van guardando el resultado de estos, por lo tanto si hacemos un .shift o .pop dentro de un .shift o .pop el resultado dependera del resultado del .shift o .pop que le precede como podemos ver en los dos casos anteriores
        
        //  Añadir elementos a un array

    //  .push(element1, element2,...)

console.log('---------------.push---------------');
console.log(numbers3);
numbers3.push(6)
console.log(numbers3);
let newLengthPush = numbers3.push(7)
console.log(numbers3);
console.log(newLengthPush);

    // .unshift(element1, element2,...)

console.log('---------------.unshift---------------');
console.log(numbers3);
numbers3.unshift(0);
console.log(numbers3);
let newLengthUnshift = numbers3.unshift(-2, -1);
console.log(numbers3);
console.log(newLengthUnshift);
console.log(numbers3);
numbers3.shift()
console.log(numbers3);

    // .indexOf()

console.log('---------------.indexOf---------------');
console.log(numbers5);
console.log(numbers5.indexOf(2));
// Me muestra como resultado la posicion en la que se encuentra el numero 2, el cual esta en la posicion 1

    // .lastIndexOf()

console.log('---------------.lastIndexOf---------------');
console.log(numbers4);
console.log(numbers4.lastIndexOf(2));
console.log(numbers5);
console.log(numbers5.lastIndexOf(2));
console.log(numbers6);
console.log(numbers6.lastIndexOf(2));
// Me muestra como resultado la posicion en la que se encuentra el numero 2, empezando a contar de derecha a izquierda. El cual en la variable numbers4 esta en la posicion 1, pero en la variable numbers5 ya hay un 2 al final por lo tanto en ese caso me arroja como resultado 5, el cual es la posicion del numero 2 final y al momento de encontrar este valor que coincide con el numero puesto en el lastIndexOf deja de buscar. Como en el tercer caso, en donde la variable numbers6 hay nuevamente un 2 despues del 2 punultimo, el cual esta en la sexta posicion y ese es el que encuentra y arroja como resultado

    // .reverse()
    
console.log('---------------.reverse---------------');
console.log(numbers6);
numbers6.reverse();
console.log(numbers6);

    // .join(''separador) (Por defecto utiliza comas como seprador)

console.log('---------------.join---------------');
console.log(numbers);
console.log(numbers.join('-'));
let arrayString = numbers.join(' ');
console.log(arrayString);

    // .splice(a, b, items)

console.log('---------------.splice---------------');
console.log(numbers5);
numbers5.splice(3);
    //  Elimina desde la posicion 3 hasta el final
    //  Un solo indica el espacio desde donde borrara
console.log(numbers5);
console.log(numbers6);
numbers6.splice(2, 2);
    // Elimina desde la posicion o espacio 2 y el borrado abarca 2 posiciones, contando una de estas la posicion en la que empieza, por lo tanto borrara la 2da y 3ra posicion
    //  Con 2 valores el primero corresponde al espacio o posicion desde donde empezara el borrado y el segundo los espacios que abarca ese borrado tomando en cuenta como uno de esos espacios el espacio desde donde empieza a contar o empezara a borrar (primer valor declarado)
console.log(numbers6);
console.log(numbers3);
numbers3.splice(3, 4, 10, 23, 54);
    //  Elimina desde la posicion 3 y abarca 4 espacios o items a borrar, empezando esos 4 items desde la posicion 3, osea que borra los items que se encuentran en las posiciones 3, 4, 5 y 6
    //  Si tenemos 3 valores, el primero y el segundo corresponde a lo mencionado con anterioridad y el tercero corresponde a los valores a añadir. Los items los añade a partir de la posicion de donde empezo el borrado, osea el primer valor declarado. Con tres valores y siendo el segundo valor distinto a 0 sirve para eliminar y añadir o viendolo de otra manera, sustituir elementos, ya que los elementos nuevos se posicionaran en los espacios de donde fueron eliminados los elementos que le indicamos
console.log(numbers7);
numbers7.splice(3, 0, 99, 100) 
    //  Abre espacio desde la segunda posicion, no elimina ningun item y los items a añadir los agrega en los espacios que abrio desde la segunda posicion dada con el primer valor, en otras palabras desplazamos los items que se encuentran a partir de la segunda posicion (3 en adelante) y los posiciona al final, despues de los valores/items nuevos a añadir
    //  Con 3 valores pero el segundo en 0, lo que conseguimos es que no elimine ningun item, solo a partir de la posicion que se declara en el primer valor añadira los valores o items nuevos declarados a partir del tercer valor, vaya despues de la segunda coma, por lo tanto digamos que estariamos desplazando los items
console.log(numbers7);

    // .slice(a, b)

console.log('---------------.slice---------------');
let newNumbers = numbers8.slice();
console.log(numbers8);
console.log(newNumbers);
    //  Si no hay valor de por medio arroja como resultado una copia de lo original
let newNumbers2 = numbers8.slice(4);
console.log(numbers8);
console.log(newNumbers2);
    //  Si hay un solo valor (a) cuenta a partir de esta posicion hasta el final para la extraccion
let newNumbers3 = numbers8.slice(4, 7); 
console.log(numbers8);
console.log(newNumbers3);
    //  Con dos valores el primero (a) corresponde a la posicion inicial desde donte empezara a tomar en cuenta y el segundo corresponde a donde terminara de contar las posiciones para la extraccion. HAY QUE TENER EN CUENTA QUE LA POSICION INICIAL (PRIMER VALOR) SI LO TOMA EN CUENTA, APARTIR DE AQUI EMPEZARA A CONTAR, PERO QUE LA POSICION FINAL (SEGUNDO VALOR) NO LA TOMA EN CUENTA, DETIENE EL CONTEO UNA POSICION ANTES. POR LO TANTO EN EL CASO ANTERIOR EXTRAE LOS ITEMS 5, 10, 15 QUE CORRESPONDEN A LAS POSICIONES 4, 5 Y 6