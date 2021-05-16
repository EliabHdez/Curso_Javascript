/* 9.- Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra */

const word = prompt(`Introduce tu nombre`).toLowerCase()
let consonantes = 0
let vocales = 0

for(letra of word){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vocales++
    }else{
        consonantes++
    }
}
console.log(`La palabra introducida es: ${word.toUpperCase()}`);
console.log(`El número de letras en la palabra es: ${word.length}`);
console.log(`El número de vocales en la palabra es: ${vocales}`);
console.log(`El número de consonantes en la palabra es: ${consonantes}`);