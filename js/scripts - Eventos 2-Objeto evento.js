const form = document.getElementById('form')
const input = document.getElementById('input')
const gallery = document.getElementById('gallery')
const link = document.getElementById('link')
const button = document.getElementById('button')

// input.addEventListener('keyup', (e) => { // Se puede poner e, ev, o event
//     console.log(e);
// })

input.addEventListener('keyup', (e) => {
    console.log(e.key);
})

// gallery.addEventListener('click', (e) => {
//     console.log(gallery);
// })

// gallery.addEventListener('click', (e) => {
//     console.log(e.target);
// })

gallery.addEventListener('click', (e) => { // La e, ev o event se utiliza cuando vamos a hacer algo en concreto con el evento, cuando vamos a ocupar el evento para generar alguna accion y este va a estar presente en el codigo. No me quedo muy claro cuando ponemos el valor de e, pero la diferencia que noto de cuando lo ocupe a cuando no, es que en el codigo estamos ocupando la e para determinar una accion, como abajo y cuando no la hemos puesto es cuando no esta presente en el codigo (e.target.classList..., e.preventDefault) y la accion a ejecutar no depende del e como en el evento del button (input.value...)
    e.target.classList.add('red')
    console.log(e.target.textContent);
})

link.addEventListener('click', (e) => {
    e.preventDefault() // El preventDefault sirve para eliminar el comportamiento por defecto. En este caso dicho comportamiento del link es llevarnos a la direccion url, sin embargo con el prevent default elimino ese comportamiento y por lo tanto el link no hace nada
})

button.addEventListener('click', () => {
    input.value = 'Es necesario llenar el formulario'
})
    // Podemos hacer eventos con "x" elemento y en comportamiento darle un objetivo diferente, como en este caso el evento lo estamos haciendo en el button, pero el resultado de este comportamiento lo estamos dirigiendo al input

// Tambien podemos ocupar "x" evento cualquiera dentro de otro evento diferente como por ej:
    /* link.addEventListener('click', (e) => {
        e,preventDefault
        button.click() - Este evento viene del evento de abajo
    }) 
    
        button.addEventListener('click', () => {
            input.value = 'Has hecho click en el boton'
        })
    */

// button.click() - Con esto podemos forzar eventos. A que nos referimos con forzar eventos y para que podria servir esto. Pues para cuando queremos que pase algo y no queremos esperar la interaccion del usuario. Ejemplo:
        // Si el formulario esta vacio y el usuario da click en enviar sin haberlo llenado en el formulario le arrojara un mensaje diciendole que debe llenar el formulario, pero que pasa si recarga la pagina o ingresa a otra pagina y despues regresa a la pagina, al momento del regreso el formulario estara vacio y el usuario tendra que volver a hacer click para que le envie el mensaje de que llene el formulario, aqui es donde entra esto de forzar el evento donde por ejemplo con el button.click() forzamos el evento para que cada vez que refresque la pagina este mensaje salte de forma automatica, esto es un ejemplo muy burdo pero sencillo de entender que es el forzar un evento y para que nos podria servir