// Una promesa es un objetos que tiene 2 callbacks internos

    const users = [{id: 1, name: 'Moises'}, {id: 2, name: 'Eliab'}, {id: 3, name: 'Sandra'}, {id: 4, name: 'Susett'}]
    
    const emails = [{id: 1, email: 'moises@gmail.com'}, {id: 4, email: 'susett@gmail.com'}]
    
    const getUser = (id) => {
        const user = users.find(user => user.id == id) // El user dentro de los parentesis solo es una variable temporal que se crea para recorrer el array, puede tener cualquier nombre, pero tiene sentido que en este caso se llame 'user'
        const promise = new Promise((resolve, reject) => {
            if(!user){
                reject(`Doesn't exist an user with id ${id}`)
            }else{
                resolve(user)
            }
        })
        return promise
    }
    
    const getEmail = (user) => {
        const email = emails.find(email => email.id == user.id)
        return promise = new Promise((resolve, reject) => {
            if(!email){
                reject(`The user ${user.name} doesn't have any registered email`)
            }else{
                resolve({
                    id: user.id,
                    name: user.name,
                    email: email.email
                })
            }
        })
    }
    
    getUser(1)
        .then(user => {
            return getEmail(user)
        })
            // En la linea anterior de codigo se podrian eliminar las llaves ya que al ser una funcion de flecha el return es automatico si solo se tiene una linea de codigo, con una linea no estoy seguro si sea una linea mas el return o que la unica linea sea el return, pero igual eso lo aclaro mas adelante y me lo grabo, el punto es que podria quedar de la sig manera: .then(user => getEmail(user))
        .then(ans => console.log(ans))
        .catch(err => console.log(err))
    
    // getUser(1)
    //     .then(getEmail)
    //     .then(console.log)
    //     .catch(console.log)
        // Esto es lo mismo que lo de arriba solo que muy simplificado, porque funciona asi? porque debido a que el then y el catch resiven un callback/funcion y solo una respuesta directa no es extrictamente necesario estipular los otros parametros. Esto puede ser algo confuso al principio y no entender muy bien el porque, pero que quede acentado que se puede y es valido