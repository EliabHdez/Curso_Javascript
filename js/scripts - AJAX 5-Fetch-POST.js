/* 
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro
            fetch(url, {
                method: 'POST',
                body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON stringify(datos),
                headers: {
                    cabeceras de información sobre lo que estamos enviando
                    https://developer.mozilla.org/es/docs/Web/HTTP/Headers
                }
            })
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: 'lorem ipsum dolor sit amet',
        userID: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(ans => ans.json())
    .then(ansjson => console.log(ansjson))
})