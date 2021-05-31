const button = document.getElementById('button')

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            userId: 1
        }
    })
    .then(ans => console.log(ans.data))
    .catch(err => console.log(err))
})