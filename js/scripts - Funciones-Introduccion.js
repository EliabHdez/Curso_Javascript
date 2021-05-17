// function saludar(){
//     console.log('Hola');
// }
// const saludar = () => console.log('Hola');
const saludar = () =>{
    console.log('Hola');  
} 
const saludarUsuario = (user) =>{
    console.log(`Hola ${user}`);
}
saludar()
saludarUsuario('Jose')
saludarUsuario('Maria')


const suma = (num1, num2) =>{
    return num1 + num2 /* Si se abren llaves y dentro el codigo a ejecutar debe devolver un valor o resultado hay que poner el return de forma forzosa, ya que cuando se abren llaves, de manera automática la function espera tener mas de una linea de código, por lo tanto no ejecutara el codigo si no hay un return. Si en este caso quitamos ese return veremos que el onsole.log no imprime el resultado de la suma, caso contrario en el caso de abajo, donde al no haber llaves no requiere un return y si imprime con el console.log el resultado de la operacion */
}
console.log(suma(2,3));

const resta = (num3, num4) => num3 - num4 /* Si en la función solo va a haber una linea de codigo no es necesario abrir llaves, aun asi correra el codigo y en este caso no arrojara el resultado de la operacion que esttamos haciendo sin la necesidad de un return. Podemos hacerlo de forma corrida en una sola linea de codigo o bien hacer un salto de linea como en el caso de abajo,lo podemos anotar como nos parezca mejor, mas facil de entender y/o leer el codigo */

console.log(resta(10,2));

const multiply = (num5, num6) =>
    num5 * num6
console.log(multiply(5,3));

const suma2 = (num7, num8) =>{
    if(num7 == 5){
        return num7 + num8
    }
    console.log(`num7 no tiene el valor de 5. Tiene el valor de:`);
    return num7
}
console.log(suma2(7,8));

// Podemos guardar en una variable el resultado de una funcion

const suma3 = (num9, num10) => num9 + num10

let result = suma(20,30)

console.log(result);