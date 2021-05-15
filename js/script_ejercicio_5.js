/* 5.- Escribe un programa que pida un número entero mayor a 0 y calcule su factorial
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad */

let num = parseInt(prompt(`Introduzca un número (>0)`))
let result = 1

for(let i = num; i > 0; i--){
    result *= i
}

// for(let i = 1; i <= num; i++){
//     result *= i
// }

console.log(`El factorial de ${num} es: ${result}`);

// Queda de ambas formas, ya sea con un for en incremento o un for con decremento. Lo dejo en decremento ya que asi fue como lo realizo dorian ademas de que cuando se habla de factorial se dice que es el número multiplicado de forma descendiente hasta la unidad, en otras palabras del numero para abajo hasta llegar al 1