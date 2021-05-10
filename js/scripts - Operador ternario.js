/* 
    Operador ternario
    
        (condicion) ? true : false
        
        (condicion) ?
            (primera sentencia,
                segunda sentencia)
            :
            (primera sentencia,
                segunda sentencia)
*/
let num = 2;
let num1 = 5;
let num2 = 10
let num3 = 22;
let num4 = 7;

// Operador ternario

(num % 2 == 0) ? 
    console.log(`${num} es par`) : console.log(`${num} es impar`);

(num2 % 2 == 0) ? 
    (console.log(`${num2} es par`),
    console.log(`${num2} es par de 2`))
        :
        console.log(`${num2} es impar`);

(num2 % 2 == 0) ? 
    (
        console.log(`${num2} es par`),
        console.log(`${num2} es par de 2`)
    )
        :
        console.log(`${num2} es impar`);

        // Estos casos son de sentencias multiples y eh puesto dos ejemplos, uno donde los parentesis que almacenan las sentencias estan de forma conjunta con las sentencias y el otro (segundo) donde los parentesis estan de forma independiente a las sentencias, este caso podria ser mejor por el orden, visiblemente mas ordenado y facil de entender su estructura y que esta dentro de que y que abarca

        (num4 % 2 == 0) ? 
            console.log(`${num4} es par`)
            :
            (
                console.log(`${num4} es impar`),
                console.log(`${num4} es impar de 2`)
            )

// Tambien podemos hacer los mismo con if, sin embargo es mas recomendable hacer este tipo de comprobaciones con el operador ternario

if (num1 % 2 == 0) {
    console.log(`${num1} es par`);
}else{
    console.log(`${num1} es impar`);
}

if (num3 % 2 == 0)
    console.log(`${num3} es par`);
else{
    console.log(`${num3} es impar`);
}
    // Aqui podemos observar que aunque tenemos un else despues del if no necesitamos las llaves de apertura y cierre y esto se debe a que else es independiente de if, por lo tanto if solo tiene como tal una sentencia, la sentencia de else es independiente del if. else aunque tenga una sola sentencia si son necesarias las llaves