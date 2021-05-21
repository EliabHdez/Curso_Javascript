/* 
    DOM - Crear e insertar elementos

    - Crear un elemento: document.createElement(element)
    - Escribir texto en un elemento: element.textContent = texto
    - Escribir HTML en un elemento: element.innerHTML = codigo HTML

    - Añadir un elemento al DOM: parent.appendChild(element)

    - Fragmentos de codigo: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const daysSelect = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daySelect = document.getElementById('daySelect')

// CREAR UN ELEMENTO / ESCRIBIR TEXTO EN UN ELEMENTO

const listItem = document.createElement('LI') // Creamos una lista
listItem.textContent = 'Lunes' // Creamos el contenido de la lista

// AÑADIR UN ELEMENTO

daysList.appendChild(listItem) // Agregamos al padre (ul) el elemento li y su contenido
console.log(listItem);
    // Para agregar un elemento se tiene que hacer desde el padre del elemento que se va a añadir. En el caso del listItem al ser un elemento de una lista, el padre es el elemento que almacena esta lista, osea el ul

// ESCRIBIR HTML EN UN ELEMENTO

title.innerHTML = 'DOM - <span>Crear e insertar elementos 1</span>'

// for (const day of days) {
    //     daysList.innerHTML += `<li>${day}</li>`
    // }
    // El problema de hacerlo de la forma anterior es que en cada vuelta inyecta mucho codigo html en el DOM y es mucha carga para el navegador, lo cual hace que consuma muchos recursos. La forma ideal para hacerlo es atraves del createDocumentFragment, que lo veremos a continuacion

// FRAGMENTO DE CODIGO
    
const fragment = document.createDocumentFragment() // Basicamente un fragmento de codigo es una variable o contenedor donde vamos a escribir todo el codigo html que vamos a inyectar al DOM, de golpe con una sola vez, en vez de hacerlo 7 veces como en el ejemplo anterior

for (const day of days) {
    const listItem2 = document.createElement('LI')
    listItem2.textContent = day
    fragment.appendChild(listItem2)
}
    // Esta seria la forma correcta de agregar codigo html en un elemento ya que como podemos observar agregamos una li con el contenido del array de los dias sin tener que agregar codigo html de mas como en el caso comentado con anterioridad donde a cada vuelta inyectabamos mucho codigo html
console.log(fragment);

daysList.appendChild(fragment)
    // Aqui ya solo añadimos el elemento fragment al padre ul

for (const day of days) {
    const listItem3 = document.createElement('OPTION')
    listItem3.textContent = day
    fragment.appendChild(listItem3)
}
daySelect.appendChild(fragment)