/* 10.- Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no */

const colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']

let color = prompt(`Introduca un color`).toLowerCase()

if(colors.indexOf(color) !== -1){
    console.log(`El color "${color}" tiene una coincidencia en el array`)
}else{
    console.log(`No hay ninguna coincidencia`);
}