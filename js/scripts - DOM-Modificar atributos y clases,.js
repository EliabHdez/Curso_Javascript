/* 
    Atributos
        element.getAttribute('attribute') - Nos devuelve el atributo
        element.setAttribute('attribute', value) - Le asigna un valor al atributo

    Clases
        element.classList.add('class', 'class', ...)
        element.classList.remove('class', 'class', ...)
        element.classList.toggle('class' [,force])
        element.classList.contains('class')
        element.classList.replace('oldClass', newClass)

    Atributos directos - Estos son atributos que se encuentran en el archivo pero que no tienen ninguna otra informacion dentro, en otras palabras que no tienen ninguna flecha que indique se pueda desplegar para mostrar la informacion adicional, estos atributos que no tienen dicha flecha dorian a comentado que se puede acceder a ellos de forma directa y es aqui donde entran los atributos que dorian designo como directos. A los que mas se suele acceder es al id, inner html, text content y al value
        - id
        - value

    NO ESTOY DEL TODO SEGURO Y TAMPOCO SE DE FORMA CONCRETA PORQUE, PERO AL PARECER PARA PODER TRABAJAR CON EL DOM Y LOS ELEMENTOS NECESITAMOS CREAR VARIABLES O CONSTANTES PARA ESTOS. ES DECIR SI QUEREMOS TRABAJAR CON EL TITLE DE UN H1, NECESITAMOS GENERAR UNA VAR O CONST DONDE GUARDAR EL TITLE PARA ASI PODER TRABAJAR CON EL. EJ const title = document.getElementById('title')
*/

// Atributos

const title = document.getElementById('title')
const number = document.getElementById('number')
const name = document.getElementById('name')

console.log(title);
console.log(name); // Aqui nos aparece que el type es text

console.log(number.getAttribute('type'));
console.log(number.getAttribute('id'));

number.setAttribute('type', 'number')
console.log(number); // Aqui ya aparece que el type es number

name1.setAttribute('type', 'radio')
console.log(name1.getAttribute('type'));

name2.setAttribute('type', 'date')
console.log(name2.getAttribute('type'));

// Clases

title.classList.add('main-title', 'other-title', 'second-title', 'third-class') // Aqui agregue una clase llamada other title

title.classList.remove('other-title') // Aqui elimine la clase other title para ver como funciona el remove

title.classList.contains('second-title')
    console.log(`Title tiene la clase second-title`);
if(title.classList.contains('other-title')){
    console.log(`Title tiene la clase other title`);
}else{
    console.log(`Title NO tiene la clase other title`);
}

title.classList.replace('third-class', 'comodin-class') // Hasta antes de esto tenia la clase llamada third-class, pero con el replace eh reemplazado esa clase por la clase comodin-class. Es como hacer un remove y despues un add, pero de forma mas rapida, sencilla y en un solo paso y con una sola linea de codigo


console.log(title);
console.log(number);

// Atributos "directos"

console.log(title.innerHTML);
console.log(title.textContent);

// Los atributos innerHTML y textContent aunque parezca que devuelven el mismo valor y los mismo resultados no es asi, si observamos el innerHTML recoge y muestra hasta las etiquetas que se encuentren dentro de lo que estamos declarando (en este caso el title), sin embargo el textContent solo devuelve el texto, no recoge etiquetas ni nada de que se relacione de forma directa con el html, solo recoge y muestra el texto plano tal cual

console.log(number.value);
console.log(name.value);
console.log(name.value.length);