/* 
    Bucles
    
    Determinados
    
        Bucle for of / for in
            for(let variable of estructura){
                codigo a ejecutar
            }

        Palabras reservadas de bucles
            break - Rompe el bucle y ahi mismo lo termina
            continue - Se salta la(s) posicion(es) que le indiquemos y continua su ejecución
*/

let names = ['Paco', 'Jose', 'Paula', 'Maria']

console.log('-------for of--------');
for(let name of names){
    console.log(name);
}

console.log('-------for in--------');
for(let index in names){
    console.log(index);
}

console.log('------index con for of---------');
for(let name of names){
    console.log(names.indexOf(name));
}
    // Se puede sacar el index mediante un .indexof en name, pero resultara mas comodo sacarlo mediante un for in cuando vayamos a ocupar o requerir ese index

console.log('------names con for in---------');
for(let index in names){
    console.log(names[index]);
}
    // De igual manera se puede sacar names con for in mediante names[index], sin embargo si es lo que queremos resulta mas como y rapido mediante el for of

console.log('------for---------');
for(i=0; i<names.length; i++){
    console.log(names[i]);
}

console.log('------break---------');
for(i=0; i<names.length; i++){
    if(names[i]==='Paula'){
        break; /* Break lo que hace es que apartir de donde le especifiquemos rompe el bucle a partir de ahi y ya no continua, ahi rompe y termina. En este caso rompe en paula y ahi se detiene, solo arroja como resultados los valores que se encuentran en las posiciones antes de paula */
    }
    console.log(names[i]);
}

console.log('------continue---------');
for(i=0; i<names.length; i++){
    if(names[i]==='Paula'){
        continue; /* Continue lo que hace es que rompe donde le especificamos, espacio/posicion pero solo salta esta posicion y continua, digamos que se salta esa posicion como si no existiera ya sea la posicion o como si no hubiera dado esa vuelta. En este caso rompe en paula, se salta esta posicion y continua con el siguiente dando como resultado los nombres de casi todas las posiciones en el array excepto el de paula que es el que se brinco */
    }
    console.log(names[i]);
}

console.log('-------for of con if y break--------');
for(let name of names){
    if(name === 'Paula'){
        break;
    }
    console.log(name);
}

console.log('-------for in con if y continue--------');
for(let index in names){
    if(names[index] === 'Paula'){
        continue;
    }
    console.log(index);
}