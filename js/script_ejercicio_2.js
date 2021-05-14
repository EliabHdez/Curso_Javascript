/* 2.- Escribe un programa que pueda calcular el area de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo
    triángulo = b*h/2
    rectángulo = b*h
    círculo = pi * radio^2 */

let figure = prompt(`Introduce el nombe de la figura geometrica de la cual quieres calcular el area: 
    1 - triangle
    2 - rectangle
    3 - circle

Escriba el nombre de la figura tal y como aparece en las opciones`)
    //  Para poder generar saltos de linea en el prompt es necesario utlizar forsozamente los acentos invertidos (``) en lugar de las comillas ("", ''), de no ser asi nos marcar error el codigo, asi que es la unica manera, tenerlo muy en cuenta, para saltos de linea en el prompt utlizar acentos invertidos
let base;
let height;
let radius;
let area;
const PI = 3.1416

// Este codigo echo con switch fue la forma que utilizo Dorian para resolver el ejercicio. Se me paso por la cabeza en su momento hacerlo con switch sin embargo no tenia muy claro como hacerlo. Aqui el se ahorro la variable area, haciendo la operacion directamente en el console.log por medio del template string, ademas de que para el radio^2 y el pi ocupo los object math

switch (figure) {
    case 'triangle':
        base = prompt('Introduzca la base del triángulo')
        height = prompt('Introduzca la altura del triángulo')
        console.log(`El área del triángulo es ${base * height / 2}`);
        break;
    case 'rectangle':
        base = prompt('Introduzca la base del rectángulo')
        height = prompt('Introduzca la altura del rectángulo')
        console.log(`El área del rectángulo es ${base * height}`);
        break;
    case 'rectangle':
        base = prompt('Introduzca la base del rectángulo')
        height = prompt('Introduzca la altura del rectángulo')
        console.log(`El área del rectángulo es ${base * height}`);
        break;
    case 'circle':
        radius = prompt('Introduzca el radio del círculo')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius, 2)}`);
        break;
    default:
        console.log('La figura geométrica no es valida');
        break;
}

// El codigo de abajo es como yo lo habia echo. No me estaba quedando ya que en los if's despues del figure le estaba poniendo solo un signo igual (=) y eran dos (==). Para el momento que resolvi este ejercicio no se porque tienen que ir 2 o 3 signos de igual, me imagino despues lo sabre, pero en este momento no sabia esta regla y estaba poniendo solo uno y no estaba bien mi codigo, sin embargo fuera de esto lo demas estaba bien, podria haberme ahorrado la variable area aun haciendolo con if's poniendo en el console.log la operacion, pero bueno, creo que hasta cierto punto se ve mas estructurado de esta forma, con el area declarada

/* if (figure == 'triangle') {
        base = prompt('Introduce la base del triángulo');
        height = prompt('Introduce la altura del triángulo');
        area = base * height / 2
        console.log(`El area del triángulo es ${area}`);
    }else
        if (figure == 'rectangle') {
            base = prompt('Introduce la base del rectángulo');
            height = prompt('Introduce la altura del rectángulo');
            area = base * height
            console.log(`El área del rectángulo es ${area}`);
    }else
        if (figure == 'circle') {
            radius = prompt('Introduce el radio del círculo');
            area = PI * (radius * radius)
            console.log(`El área del círculo es ${area}`);
    }else{
        console.log('Figura geometrica no valida');
    } */