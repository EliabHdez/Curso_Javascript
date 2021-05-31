// Await no funciona sin Async. En otra palabras await solo es valido en funciones y generadores asyncronos, por lo tanto va de la mano con Async

/* const getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Moises')
        }, 1500)
    })
}

// Async = Asyncrono: Esto quiere decir que el codigo no se va a ejecutar uno debajo de otro, de forma secuencial

const sayHello = async () => {
    const name = await getName() // Con await le estamos diciendo que esa linea de codigo no se va a ejecutar hasta que el getName este resuelto y porque esto? Porque en la funcion anterior tenemos un tiempo de un segundo y medio para que se resuelva la funcion
    return `Hello ${name}`
}

console.log(sayHello())

sayHello().then(ans => console.log(ans)) */

const users = [{id:1, name:'Eliab'}, {id:2, name:'Susett'}, {id:3, name:'Sandra'}, {id:4, name:'Moises'}]
const emails = [{id:1, email: 'eliab@icloud.com'}, {id:2, email: 'susett@gmail.com'}, {id:3, email: 'sandra@gmail.com'}]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if (!user) {
        throw new Error(`Doesn't exist an user with id ${id}`)
    }else{
        return user
    }
}
const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) {
        throw new Error(`${user.name} haven't an email registered`)
    }else{
        return({
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

const getInfo = async (id) => {
    try{
        const user = await getUser(id)
        const ans = await getEmail(user)
        return `${user.name} email is ${ans.email}`
    }catch (error) {
        console.log(error)
    }
}

getInfo(4).then(ans => console.log(ans))