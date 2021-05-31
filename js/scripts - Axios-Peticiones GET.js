/* Para hacer peticiones por medio de axios necesitamos hacer uso del link
    https://unpkg.com/axios/dist/axios.min.js

    Este link lo vamos a establecer en una etiqueta script en el archivo html, antes del script que lleve nuestro archivo js
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="../js/scripts - Axios-Peticiones GET.js"></script>
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(ans => {
        const list1 = document.getElementById('list-1')
        const fragment = document.createDocumentFragment()
        for(const userInfo of ans.data){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.append(listItem)
        }
        list1.append(fragment)
    }).catch(err => console.log(err))
})