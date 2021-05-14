/* 1.- Solicita un nombre, la edad y muestra por consola el mensaje "Hola 'nombre', tienes 'edad' años y el años que viene tendras 'edad' años"
    Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings */

let names = prompt('Introduce tu nombre y apellido');
let age = parseInt(prompt('Introduce tu edad'));
    // parseInt hace la conversión de string a número

    // Se agrega el parseInt y dentro el prompt ya que de forma automatica al ingresar un dato mediante el prompt este se convierte en un string, por lo tanto si no le agregamos el parseInt la edad sera un string y al momento de imprimir en pantalla, le agregara un 1 al string edad, lo cual quedaria como "201", pero con parseInt logramos que se convierta en número y asi sumarle un 1 al número de la edad

console.log(`Hola ${names}, tienes ${age} años. El año que viene tendras ${age+1} años`);