/* 3.- Solicita un número e imprime todos los números pares e impares desde 1 hasta el número solicitado, con el mensaje "es par" o "es impar"
    ej: si el numero ingresado es 5 el resultado tendra que ser:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar */

// let number = prompt('Introduzca el dígito final');
// let number = prompt(`Introduzca el dígito final`);
let number = parseInt(prompt(`Introduzca el dígito final`));
    //  Aqui tambien podemos hacer uso del parseInt. Sin embargo no tengo claro para que valdria usarlo. Asi fue como resolvio el ejercicio Dorian, pero no se porque, trato de entender que para que el numero que se digite sea tal cual un numero y no un string, pero al no haber un incremento o decremento de por medio el numero seguira siendo el mismo que se digite, por lo tanto me quedo medio desconcertado en el porque utilizar el parseInt, sin embargo lo dejo asi para tenerlo mas en cuenta y reforzar que es el método para convertir strings en numeros

for(let i = 1; i <= number; i++){
        if(i % 2 == 0){
            console.log(`${i} - es par`);
        }else
            console.log(`${i} - es impar`);
}

// ESTE EJERCICIO PUDE RESOLVERLO POR MI MISMO, LO UNICO QUE CAMBIO ENTRE LO QUE YO HICE Y LO QUE HIZO DORIAN FUE UTILIZAR EL PARSEINT