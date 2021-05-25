/* 
    Protocolo HTTP:
        https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

    Codigos de estado de respuesta HTTP:
        https://developer.mozilla.org/es/docs/Web/HTTP/Status
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    
    xhr.addEventListener('load', (data) => {
        const dataJson = JSON.parse(data.target.response)
        const listUl = document.getElementById('listUl')
        for(const userInfo of dataJson){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            listUl.appendChild(listItem)
        }
    })
    xhr.send()
})
