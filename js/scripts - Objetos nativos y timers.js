/* 
    Objeto window - Es el objeto global, de el descienden todos los objetos
        alert()
        prompt()
        confirm()

    Objeto console - Es el objeto que contiene la consola del navegador
        https://developer.mozilla.org/es/docs/Web/API/Console
        - console.log()
        - console.dir()
        - console.error()
        - console.table()

    Objeto location - Es el objeto que contiene la barra de direcciones
        https://developer.mozilla.org/es/docs/Web/API/Location
        - location.href
        - location.protocol
        - location.host
        - location.pathname
        - location.hash
        - location.reload()

    Objeto history
        https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
        - back()
        - forward()
        - go(n o -n)

        length es una propiedad que nos indica el numero de paginas visitadas, es el historial de las paginas de la pestaña

    Objeto date
        Solo tenia enlances a la documentacion oficial. Para utilizar el objeto date, hay que instanciarlo, que quiere decir que hay que crear el objeto

    Timers
        Timeout:
            https://developer.mozilla.org/es-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

            setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la funcion despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

        Interval:
            https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

            setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la funcion cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

const person = {
    name: 'Eliab',
    age: 30,
    email: 'xxxxx.@hotmail.com'
}

// WINDOW OBJECT

// ALERT

// window.alert('Hola')
/* alert('Hola estimado Usuario')  */
    // Es lo mismo que poner window.alert, ya que como window es el objeto global, siempre que no pongamos nada por delante el navegador va a entender que nos estamos refiriendo a window. Esto aplica para todos los objetos window (alert, prompt, confirm)

// EJEMPLO DE COMO SE AGREGA UN EVENTO AL OBJETO WINDOW (GLOBAL)
addEventListener('click', (e) => {
    console.log(e);
})
    // Cuando agregamos algo que no le anteceda un punto (.) este se asocia automaticamente a window. Esta seria una forma de asociar un evento a la ventana

// PROMPT

// prompt(`¿Acepta los terminos y condiciones?
// Para confirmar escriba SI, para negar escriba NO`)
    // El prompt sirve para poder solicitar datos y poderlos escribir, sin embargo no es muy recomendable ocuparlo salvo en casos especificos ya que el prompt asi como el alert y el confirm detiene la pagina, detienen su carga, entonces para solicitar informacion o datos es mejor hacerlo mediante un formulario o algun otro metodo

// CONFIRM

/* if(confirm('¿Acepta que podamos revisar su Buro de Crédito?')){
    console.log('El usuario acepto la revision de su Buro de Crédito');
}else{
    console.log('El usuario NO acepto la revision de su Buro de Crédito');
}

const confirmation = prompt(`¿Acepta los terminos y condiciones?
Para confirmar escriba SI, para negar escriba NO`)
switch(confirmation.toLowerCase()){
    case 'si':
        confirm('Acepto los término y condiciones')
        console.log('El usuario acepto los términos y condiciones');
        break
    case 'no':
        confirm('NO Acepto los términos y condiciones')
        console.log('El usuario NO acepto los términos y condiciones');
        break
    default:
        confirm('Su respuesta tiene que ser SI o NO')
}
 */
// CONSOLE OBJECT

console.log(person);
console.dir(person);
    // Dorian no sabe con exactitud que cambia entre .log y .dir, sin embargo comento que en ciertos casos con el .log luego aparece un elemento que no permite ser desplegable, para cuando suceda esto podemos ocupar el .dir
console.error();
console.table(person)
console.table([1,2,3,4,5])
    // Con .table podemos ver el contenido en la consola de una forma mas clara en un formato de tabla donde aparecera el indice o la posicion y por un costado su valor

// LOCATION OBJECT

console.log(location.href);
    // Muestra la direccion de la pagina
console.log(location.protocol);
    // Muestra el protocolo, esto no sirve para saber si la pagina es http o https
console.log(location.host);
    // Muestra el dominio principal. Si estamos dentro de una carpeta o subdirectorio, este nos devuelve la localizacion principal del dominio
console.log(location.pathname);
    // Nos muestra el resto de la localizacion, no arroja el dominio principal y vemos los subdirectorios donde estamos metidos
console.log(location.hash);
    // Es una forma de pasar parametros entre paginas. Este nos sirve para cargar una informacion u otra en la misma pagina
/* location.reload() */
    // El reload nos sirve para recargar la pagina, este no se suele poner asi no mas en donde sea porque estaria recargando la pagina, es por eso que lo tengo comentado, este puede usarse por ejemplo en un if, donde si se cumple cierto parametro o funcion recargamos la pagina

/* location.href = 'https://google.com' */
    // location.href tambien nos sirve para cambiar el valor de la url de la pagina. Esto es una forma de redirigir atraves de javascript las paginas, algo asi como una etiqueta a

// HISTORY

    // El history junto con sus propiedades lo ocupamos de forma directa en la consola del navegador y como su nombre lo indica nos arroja el historial de navegacion de una sola pestaña, que se ha generado es esa sesion; los valores que podemos ocupar nos sirven para navegar entre las paginas del historial como lo hariamos con las flechas de navegacion del navegador

    /* Las opciones disponibles se anotan como funciones seguidas del history ej:
    
    history.back() 
    history.forward()
    history.go(1)
    history.go(-2)
        las cuales nos sirven para ir atras y adelante mediante la consola y go lleva un parametro numerico dentro de la funcion, donde si el numero es positivo iriamos para adelante el numero de paginas correspondiente al valor anotado y si es negativo iriamos para atras
    history.length
        Con este podemos ver cuantas paginas tenemos en el historial de esa pestaña*/

// DATE OBJECT

const date = new Date()
console.log(date.getDate());
console.log(date);

// TIMERS

// setTimeout

button.addEventListener('click', () => {
    setTimeout(saludar, 3000) // Si la funcion a ejecutar es una funcion externa, aqui ya no es necesario poner la sintaxis de la funcion (() => )
})

const saludar = () => { // Esta es la funcion
    console.log('Hola');
}

const despedida = 'Adios' // Puedo declarar una variable/constante para despues ser esta la que ponga dentro del console.log, pero si no quiero declararla y quiero poner el valor directo en el console.log (console.log('Adios)) tambien lo puedo hacer y es valido

button.addEventListener('click', () => {
    setTimeout(() => {
        console.log(despedida); // Aqui ocupe la constante, pero tambien puedo poner el valor de forma directa ('Adios')
    },3000)
})
    // En este caso donde la funcion esta dentro del la funcion setTimeout aqui si que tenemos que poner la sintaxis de la funcion y el callback completo y el valor del setTimeout va despues de la llave final de la funcion, entre la llave de la funcion y el parentesis para que el valor quede dentro del setTimeout

// Para utilizar el clearTimeout y detener el Timeout necesitamos que este ultimo este guardado en una variable/constante

const timeOut = setTimeout(() => {
     console.log('Prueba de clearTimeout');
},3000)

const button2 = document.getElementById('button2')

button2.addEventListener('click', () => {
    clearTimeout(timeOut)
})
    // Esta seria la forma de frenar un timeout

// setInterval

const greet = 'Hello'
let cont = 0

const greetInterval = setInterval(() => {
    console.log(cont);
    cont++
},1000)

const button3 = document.getElementById('button3')

button3.addEventListener('click', () => {
    clearInterval(greetInterval)
})