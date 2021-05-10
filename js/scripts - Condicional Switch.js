/* 
    Condicional switch

        Sintaxis simple: 
            switch(evaluacion) {
                case n:
                    //codigo
                    break;
                case n2:
                    //codigo
                    break;
                default:
                    //codigo
            }
            
        Sintaxis múltiple:
            switch(evaluacion) {
                case n:
                case n2:
                case n3:
                case n4:
                    //codigo
                    break;
                case n5:
                case n6:
                    //codigo
                    break;
                default:
                    //codigo
            }
*/
let num = 4;

switch (num) {
    case 1:
        console.log('Num tiene el valor de 1');
    break;
    case 2:
        console.log('Num tiene el valor de 2');
    break;
    default:
        console.log(`Num no tiene el valor de 1 ni 2. Tiene el valor de ${num}`);
}

let num1 = 2;

switch (num1) {
    case 1:
        console.log('Num_1 tiene el valor de 1');
    break;
    case 2:
        console.log('Num_1 tiene el valor de 2');
    break;
    default:
        console.log(`Num_1 no tiene el valor de 1 ni 2. Tiene el valor de ${num1}`);
}

switch (num1) {
    case 1:
    case 3:
    case 5:
        console.log(`${num1} es impar`);
        break;
        case 2:
        case 4:
            console.log(`${num1} es par`);
}

//  Sintaxis multiple encadenada: Este es otro tipo de sintaxis del condicional switch, el cual no lo vimos en este capitulo...