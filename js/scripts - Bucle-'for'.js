/* 
    Bucles

        Determinados:
    
        Bucle 'for'
    
            Sintaxis: Se compone de 3 partes
                - Creacion de la variable
                - Numero de vueltas
                - Incremento o decremento

                for( let i=0; i<=3; i++){
                    codigo a ejecutar
                }

            La 'i' es un standar para la variable del for, esta i viene de incremento, si hay un for dentro de otro for la letra para la    variable del for anidado seria la 'j'
            
            Ejecución
                for( let i=0; i<=3; i++){
                    console.log(i)
                }
                    1ra vuelta: i=0 - ¿i<=3? - 0 - i++ --> El programa se pregunta si i es menor o igual a 3, como es asi, repite este proceso
                    2da vuelta: i=1 - ¿i<=3? - 1 - i++ --> El programa se pregunta si i es menor o igual a 3, como es asi, repite este proceso
                    3ra vuelta: i=2 - ¿i<=3? - 2 - i++ --> El programa se pregunta si i es menor o igual a 3, como es asi, repite este proceso
                    4ta vuelta: i=3 - ¿i<=3? - 3 - i++ --> El programa se pregunta si i es menor o igual a 3, como es asi, repite este proceso
                    5ta vuelta: i=4 - ¿i<=3? - Fin del bucle --> El programa se pregunta si i es menor o igual a 3, como no es asi, e i ya es   mayor que 3 se detiene el bucle. Fin del bucle

                    En todas las repeticiones del bucle el programa se pregunta si i es menor o igual a 0, al ser si este aumenta el valor de i     en 1 en cada repeticion hasta llegar a 4 lo cual hace que i valga 4 por lo tanto ya no se cumple la condicion y el programa     detiene el repetir el bucle. Es el fin de este
*/

for(let i=0; i<=10; i++){
    console.log(i);
}
// Si ponemos variable++(i++) primero se imprime y despues aplica el incremento (Lo mas comun es verlo de esta forma)
// Si ponemos ++variable(++i) primero aplica el incremento y despues se imprime

console.log('**********');

for(let i=10; i>=0; i--){
    console.log(i);
}

console.log('**********');

for(let i=10; i>=0; i--){
    if (i==5) {
    console.log(i);
    }
}

console.log('**********');

for(let i=10; i>=0; i--){
    if (i!=5) {
        console.log(i);
    }
}

console.log('**********');

let numbers = [1, 2, 3, 4, 5]

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log('**********');

let numbers2 = [10, 20, 30, 40, 50]

for(let i=0; i<=numbers2.length; i++){
    console.log(`i vale ${numbers2[i]} y la posicion de ese valor en el array es ${i}`);
}
    // El caso de arriba lo hice yo de forma deliberada, ya que en ese momento pense que estaba mejor debido a que crei que el valor de i correspondia al valor asignado a cada item dentro del array y no al espacio/posicion que ocupa cada item en el array
console.log('**********');
for(let i=0; i<=numbers2.length; i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers2[i]}`);
}
    // El caso de arriba fue el que hizo dorian design donde le da a i el valor que corresponde al espacio/posicion de los items en el array y no el valor que tiene como tal cada item, al compilar el codigo ya se especifica que el valor de ese espacio/posicion en 'x', pero i esta teniendo como valor la posicion de cada item en el array.

    // Lo pantleado en los dos ultimos casos me genero mucha confusion ya que no supe en su momento (tal vez siga sin saberlo al momento de volver a ver este archivo) si el valor de un item en un array lo determina como tal el item o el espacio/posicion que ocupa en el array. Por lo tanto no supe que era mas correcto, si i tiene el valor del item o de la posicion del item