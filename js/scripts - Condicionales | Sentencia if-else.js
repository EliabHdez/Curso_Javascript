/*
    Condicional - Sentencia if-else
        Condicional simple
        Condicional compuesto
        Condicional multiple
*/

let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = -1;
let num5 = 0;

    // Condicional simple

if(num > 0) console.log(`${num} es mayor que 0`);
//  Si solo tenemos una condicion podemos omitir las llaves
if(num2 > 0) {
    console.log(`${num2} es mayor que 0`);
}
if(num3 > 0) {
    console.log(`${num3} es mayor que 0`);
    console.log(`${num3} es mayor que 0`);
}
    // Si tenemos dos o mas condiciones como sera en el caso de las condicionales compuestas y multiples tendremos que poner las llaves de forma obligatoria

    // Condicional compuesto

if (num4 > 0) {
    console.log(`${num4} es mayor que 0`);  
}else{
    console.log(`${num4} es menor que 0`);
}
    /* la condicion else va DESPUES del cierre de llaves de la condicional 
        if (condicion)..{
        }else{
        } */

    // Condicional multiple 
if (num5 > 0) {
    console.log(`${num5} es mayor que 0`);  
}else 
    if (num5 < 0) {
        console.log(`${num5} es menor que 0`);
}else{
    console.log(`${num5} es igual a 0`);
}

/* 
    Operadores Logicos
        - && --> and
        - || --> or 
*/

    // &&

let num6 = 20;
let num7 = 10;

if (num6 > 15 && num7 > 15) {
    console.log(`${num6} y ${num7} son mayores que 15`);
}
    // En este caso no aparece nada en la salida al correr el codigo debido a que solo una de las variables cumple la condicion, que es la variable num7. Para que nos aparezca el resultado y corra el codigo es necesario que en el operador logico "and"(&&) ambas o todas las variables que tenemos cumplan la condicion

if (num6 > 5 && num7 > 5) {
    console.log(`${num6} y ${num7} son mayores que 5`);
}
if (num < 20 && num2 < 20 && num3 < 20 && num6 < 20) {
    console.log(`${num}, ${num2}, ${num3} y ${num6} son menores que 20`);
}
if (num > num4) {
    if (num2 > num4) {
        console.log(`${num} y ${num2} son mayores que ${num4}`);
    }
}
    // Podemos anidar if's. Esto quiere decir meter dentro de if's otros if's como en el caso anterior, donde si alguna de las dos o mas condiciones que tenemos se cumplen corre el codigo y nos arroja la respuesta, de lo contrario no lo hace, aunque se cumpla la primera como para pasar a las siguientes, si las siguientes no se cumplen, no nos mostrara el resultado. Esto tambien aplica que si la primera condicion se cumple pasara a la siguiente, y a la siguiente y a la siguiente, pero si alguna no cumple la condicion no arrija el resultado, cn esto podriamos saber que si la tenemos una respuesta quiere decir que todas las sentencias cumplen la condicion y si no obtenemos respuesta todas o alguna de ellas no cumple la condicion

let num8 = 30;
let num9 = 30;

if (num6 > 10) {
    if (num7 > 10) {
        console.log(`${num6} y ${num7} son mayores que 10`);
    }else if (num7 < 10) {
        console.log(`${num6} es mayor que 10 y ${num7} es menor que 10`);
    }else{
        console.log(`${num6} es mayor que 10 y ${num7} es igual a 10`);
    }
}

if (num9 > 30) {
    if (num8 > 30) {
        console.log(`${num9} y ${num8} son mayores que 30`);
    }else if (num8 < 30) {
        console.log(`${num9} es mayor que 30 y ${num8} es menor que 30`);
    }else{
        console.log(`${num9} es mayor que 30 y ${num8} es igual a 30`);
    }
}else if (num9 < 30) {
    if (num8 > 30) {
        console.log(`${num9} es menor que 30 y ${num8} es mayor que 30`);
    }else if (num8 < 30) {
        console.log(`${num9} y ${num8} son menores que 30`);
    }else {
        console.log(`${num9} es menor que 30 y ${num8} es igual a 30`);
    }
}else {
    if (num8 > 30) {
        console.log(`${num9} es igual a 30 y ${num8} es mayor que 30`);
    }else if (num8 < 30) {
        console.log(`${num9} es igual a 30 y ${num8} es menor que 30`);
    }else {
        console.log(`${num9} y ${num8} son iguales a 30`);
    }
}

let  word = 'Hola'
if (word.length > 4) {
    console.log(`${word} tiene mas de 4 letras`);
}else if (word.length < 4) {
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let  word1 = 'World'
if (word1.length > 4) {
    console.log(`${word1} tiene mas de 4 letras`);
}else if (word1.length < 4) {
    console.log(`${word1} tiene menos de 4 letras`);
}else{
    console.log(`${word1} tiene 4 letras`);
}

let  word2 = 'Moy'
if (word2.length > 4) {
    console.log(`${word2} tiene mas de 4 letras`);
}else if (word2.length < 4) {
    console.log(`${word2} tiene menos de 4 letras`);
}else{
    console.log(`${word2} tiene 4 letras`);
}

// Con los booleanos if trabaja de la misma manera

let respuesta = true;
let respuesta1 = false;

if (respuesta==true) {
    console.log('Respuesta tiene el valor true');
}
if (respuesta==true) {
    console.log(`${respuesta} tiene el valor true`);
}
if (respuesta1==false) {
    console.log('Respuesta_1 tiene el valor false');
}
    // Esta es una forma de poner los booleanos variable=="booleano". Sin embargo hay otra la cual es la mas comun y la que mas se ve, es la mas usada y lo habitual

if (respuesta) {
    console.log('Respuesta tiene el valor true');
}
if (!respuesta1) {
    console.log('Respuesta_1 tiene el valor false');
}
if (respuesta) console.log('Respuesta tiene el valor true');
if (!respuesta1) console.log('Respuesta_1 tiene el valor false');
    // Esta es la otra forma de poner los booleanos, donde para true basta solo poner el valor y para false añadimos un signo de exclamacion/admiracion (!) al inicio del valor. Este signo es el operador de negacion en el lenguaje de programacion. No se si solo en javascript o en todos o algunos, pero al menos en js asi es y eso representa

    // Aqui como se puede observar tambien puse las sentencias y el codigo sin las llaves ya que como vimos en capitulos anteriores si solo hay una declaracion nos podemos brincar el poner las llaves, si hay 2 o mas ya sera obligatorio abrir llaves y almacenar dentro de estas todas las declaraciones