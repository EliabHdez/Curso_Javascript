/* 
    Eventos de ratón:
        click: Cuando pulsamos el botón izquiero del mouse
        dblclick: Cuando pulsamos dos veces seguidas el botón izquierdo del mouse
        mouseenter: Cuando entramos en la zona que tiene el evento
        mouseleave: Cuando salimos de la zona que tiene el evento
        mousedown: Cuando pulsamos el boton izq del mouse
        mouseup: Cuando soltamos el boton izquierdo del mouse
        mousemove: Cuando movemos el mouse

    Eventos del teclado:
        keydown: Cuando pulsamos una tecla
        keyup: Cuando soltamos una tecla
        keypress: Cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

// EVENTOS DE MOUSE

button.addEventListener('click', () => {
    console.log('CLICK');
})

button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
})

/* box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'red'
})

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'lime'
}) */
    // Recordar que dar estilos en javascript no es lo mas correcto, se puede y funciona pero no es buena practica, esto solo se hizo con fines demostrativos y educativos. La manera correcta la veremos en la parte de abajo

box.addEventListener('mouseenter', () => {
    box.classList.replace('lime', 'red')
})

box.addEventListener('mouseleave', () => {
    box.classList.replace('red', 'lime')
})
    // Esta seria la forma correcta de hacerlo, generando clases para que por medio de estas trabajemos con los eventos

box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO UN BOTON DEL MOUSE ESTANDO SOBRE LA CAJA');
})

box.addEventListener('mouseup', () => {
    console.log('HAS DEJADO DE PULSAR EL BOTON DEL MOUSE ESTANDO SOBRE LA CAJA');
})

box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL MOUSE ESTANDO SOBRE LA CAJA');
})

// EVENTOS DE TECLADO

input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
})

input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA');
})

input.addEventListener('keypress', () => {
    console.log('HAS MANTENIDO PULSADA UNA TECLA');
})
    // Lo interesante y la gracia de los eventos de teclado es saber que tecla hemos pulsado, esto lo veremos en el tema Eventos 2 - Objeto-Evento