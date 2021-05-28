/* 
    Fetch API (Reemplazo de XMLHttpRequest)
        Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas
        
        También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recurso de forma asíncrona por la red
        
        Esta basado en promesas, por lo cual tiene un response y reject internos
            Response tiene varios métodos
                - arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo
                - blob: Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
                - clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente
                - formData(): Se utiliza para leer los objetos formData
                - json(): Convierte los archivos json en un objeto de JavaScript
                - text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

                --- Comprobacion soporte FETCH en el navegador ---
                
                    if(window.fetch != undefined){
                        console.log(`Fetch OK`);
                    }else{
                        console.log(`Fetch isn't OK`);
                    }
*/

const button = document.getElementById('button')
// ans (de answer) = response = respuesta de la promesa
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(ans => ans.ok ? Promise.resolve(ans) : Promise.reject(ans))
    .then(ans => ans.json()) // line 1
    .then(ans => { // Line 2
        const listUL = document.getElementById('listUL')
        const fragment = document.createDocumentFragment()
            for(const userInfo of ans){
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.append(listItem)
            }
            listUL.append(fragment)
    })
})

// Las lineas Line 1 y Line 2 de .then del ejercicio superior sustituyen a todo el codigo xhr de abajo, y lo que todo el xhr conlleva crear para su correcto funcionamiento, esto es lo que viene siendo y haciendo fetch

/* button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/uses')
    
        xhr.addEventListener('load', (data) => {
            const dataJson = JSON.parse(data.target.response)
    
            const listUL = document.getElementById(listUL)
            for(const userInfo of dataJson){
                const listItem = document.getElementById('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                listUL.append(listItem)
            }
        })
    }
    xhr.send()
}) */