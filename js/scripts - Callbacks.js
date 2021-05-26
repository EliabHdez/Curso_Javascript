// Un callback es una función que se ejecuta através de otra función
// Los callbacks no son asíncronos, esto quiere decir que se ejecutan por orden

    // cb = Abreviatura de callback

/* const getUser = (id, cb) => {
    const user = {
        name: 'Moises',
        id: id
    }
    if(id==2){
        cb('User not exist') // Aqui se va a ejecutar la función de abajo
    }else{
        cb(null, user)
    }
} */

/* getUser(2, (err, user) => { // El numero 2 hace referencia al id del user, donde en la funcion anterior le estamos esecificando dos paremetros dentro de la funcion y uno de ellos es el id, pues este 2 hace referencia a ese id
    if(err){
        return console.log(err);
    }else{
        console.log(`Username is ${user.name}`);
    }
}) */
    // Esta funcion es la funcion que se va a ejecutar en la función de arriba, en el callback

const users = [
    {
        id: 1,
        name: 'Moises'
    },
    {
        id: 2,
        name: 'Eliab'
    },
    {
        id: 3,
        name: 'Sandra'
    },
    {
        id: 4,
        name: 'Susett'
    }
]

const emails = [
    {
        id: 1,
        email: 'moises@gmail.com'
    },
    {
        id: 4,
        email: 'susett@gmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id) // El user dentro de los parentesis solo es una variable temporal que se crea para recorrer el array
    if(!user){
        cb(`Not exist a user with id ${id}`)
    }else{
        cb(null, user)
    }
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if(!email){
        return console.log(`The user ${user.name}, doesn't have any registered email `);
    }else{
        cb(null, {
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

getUser(2, (err, user) => {
    if(err){
        return console.log(err);
    }else{
        getEmail(user, (err, resp) => {
            if(err){
                return console.log(err);
            }else{
                console.log(resp);
            }
        })
    }
})