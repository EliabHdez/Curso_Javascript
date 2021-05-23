/* 
    Insertar elementos (II parte) y eliminar elementos
        parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL
        parent.insertAdjacentElement(position, element)
        parent.insertAdjacentHTML(position, HTML)
        parent.insertAdjacentText(position, text)

    parent.replaceChild(newChild, oldChild) - Reemplaza a un hijo por otro

    Positions
        beforebegin: Antes de que empiece (hermano anterior)
        afterbegin: Despues de que empiece (primer hijo)
        beforeend: Antes de que acabe (ultimo hijo)
        afterend: Despues de que acabe (hermano siguiente)


    DOM manipulation convenience methods - JQuery Like https://caniuse.com/#search=JQuery-like

    Positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - Despues de que empiece (primer hijo)
        parent.append() - Antes de que acabe (ultimo hijo)
        parent.after() - Despues de que acabe (hermano siguiente)

        child.replaceWith(newChild)

    Clonar y eliminar elementos
        - element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento, sin hijos
        - element.remove() - Elimina el nodo del DOM
        - element.removeChild(child) - Elimina el nodo hijo del DOM
*/

const listUL = document.getElementById('listUL')
const newElement = document.createElement('li')
const newElement2 = document.createElement('li')
const newElement3 = document.createElement('li')
const newElement4 = document.createElement('li')
const newElement5 = document.createElement('li')
const newElement6 = document.createElement('li')
const newElement7 = document.createElement('li')
const newElement8 = document.createElement('li')
newElement.textContent = "This is a new element"
newElement2.textContent = "This is a new element 2"
newElement3.textContent = "This is a new element 3"
newElement4.textContent = "This is a new element 4"
newElement5.textContent = "This is a new element 5"
newElement6.textContent = "This is a new element 6"
newElement7.textContent = "This is a new element 7"
newElement8.textContent = "This is a new element 8"

listUL.appendChild(newElement) // El appendChild nos permite añadir elementos, sin embargo estos siempre se van a añadir al ultimo, en la posicion final, si queremos agregar dispositivos en otra posicion tenemos otro metodo, el 'insertBefore'

// parent.insertBefore(newElement, referenceElement)

listUL.insertBefore(newElement2, listUL.children[0])
listUL.insertBefore(newElement3, listUL.children[2])

// parent.insertAdjacentElement(position(beforebeging, afterbegin, etc...), element)

listUL.insertAdjacentElement("beforebegin", newElement4) // Esto añade un elemento pero como hermano en una posicion anterior, esto quiere decir que el newElement4 seria hermano del UL por lo tanto estaria a la misma altura o nivel que el UL y no dentro de el

// listUL.children[0].insertAdjacentElement("beforebegin", newElement5) 
    // Podemos ocupar este metodo para integrarlo dentro del UL (padre), ya que si lo dejamos como en el caso anterior no seria un hijo del UL, si no un hermano en una posicion antes, por lo tanto lo deja fuera del UL, como podemos ver con el newElement4. Sin embargo para ponerlo dentro tambien contamos con otro metodo, el cual estara abajo de este

listUL.insertAdjacentElement("afterbegin", newElement5) // Con este metodo podemos omitir el children ya que hace referencia a un hijo y no a un hermano, por lo tanto entraria dentro del UL (padre)

listUL.insertAdjacentElement("beforeend", newElement6) // Lo mismo que el afterbegin, hace referencia a un hijo directo, por lo tanto lo coloca dentro del padre, solo que en este caso lo hace hasta el final, antes de que acabe el padre

listUL.insertAdjacentElement("afterend", newElement7) // Lo mismo que el beforebegin, hace referencia a un hermano y lo coloca fuera del padre que estipulamos en la linea de codigo solo que en el caso del afterend lo pone despues, el beforebegin es antes y el afterend es despues. Para colocarlo dentro del padre tendriamos que ocupar de igual manera el children mas una posicion como se vera en el siguiente caso

listUL.children[6].insertAdjacentElement("afterend", newElement8) // Es importante ver bien la posicion en la que se va a poner ya que de estarla poniendo erroneamente, este no se colocara y nos arrojara un error. En este caso esta dentro del UL que tienes 6 hijos, por lo tanto le ponemos 6 en la posicion que quiere decir que iria despues de la posicion 6, eso quiere decir que estaria ocupando la posicion 7, ya que este se basa en "despues de que acabe", por lo tanto se estaria poniendo despues de que acabe la posicion 6 y esto es porque la posicion 6 existe, si le ponemos [7], la posicion 7 no esta declarada, aunque seria la posicion que este ocuparia, esta posicion tal cual no existe por lo tanto no se puede poner "despues" de esta ya que no existe y en este caso nos estaria arrojando un error

listUL.insertAdjacentHTML("beforeend", '<li>Elemento con HTML1</li>') // Con esto añadimos la etiqueta y su contenido de una forma mas directa, con esto nos ahorramos el tener que declarar una constante y declarar nos muestre el contenido de esa constante

listUL.insertAdjacentText("beforeend", '<li>Elemento con Text</li>')
listUL.insertAdjacentText("afterend", '<li>Elemento con Text2</li>')
listUL.children[0].insertAdjacentText("afterend", '<li>Elemento con Text3</li>')

listUL.insertAdjacentHTML("beforebegin", '<li>Elemento con HTML2</li>')
listUL.children[0].insertAdjacentHTML("beforebegin", '<li>Elemento con HTML3</li>')

const listUl2 = document.getElementById('listUl2')
const replaceElement = document.createElement('li')
replaceElement.textContent = 'Elemento creado para el replaceChild'

listUl2.replaceChild(replaceElement, listUl2.children[1]) // Reemplaza el segundo hijo por el nuevo elemento creado con el replaceChild. Reemplazamos un nodo con otro

// APARTIR DE AQUI VEREMOS OTROS METODOS QUE HACEN EXACTAMENTE LO MISMO QUE LO ANTERIORES, PERO DE UNA MANERA MAS FACIL Y CON MENOS CODIGO, LOS ANTERIORES TIENEN UN SOPORTE TOTAL EN CAMBIO ESTOS SI Y NO YA QUE CON EL UNICO QUE NO FUNCIONAN YA ES CON INTERNET EXPLORER, ASI QUE PODEMOS OCUPAR ESTOS NUEVOS SIN PROBLEMAS EN LUGAR DE OCUPAR LOS ANTERIORES

// const listUl3 = document.getElementById('listUl3')
const newMethod = document.createElement('li')
const newMethod2 = document.createElement('li')
const newMethod3 = document.createElement('li')
const newMethod4 = document.createElement('li')
const newMethod5 = document.createElement('li')
const newMethod6 = document.createElement('li')
const newMethod7 = document.createElement('li')
newMethod.textContent = 'Element created to try new Methods'
newMethod2.textContent = 'Element created to try new Methods2'
newMethod3.textContent = 'Element created to try new Methods3'
newMethod4.textContent = 'Element created to try new Methods4'
newMethod5.textContent = 'Element created to try new Methods5'
newMethod6.textContent = 'Element created to try new Methods6'
newMethod7.textContent = 'Element created to try new Methods7'

listUl3.before(newMethod)
listUl3.children[0].before(newMethod) // En este caso para integrarlo dentro del padre necesitamos al igual que el anterior agregar el children mas la posicion que queremos que ocupe, sin embargo la estructura es diferente ya que en este caso lo pondremos despues del parent y seguido del children el metodo .before o el que vayamos a ocupar y dentro de los parentesis de este el nuevo elemento. Con estos nuevos metodos el children ya no va dentro de los parentesis como en el anterior, hay que tener muy bien en cuenta esto

listUl3.prepend(newMethod2)

listUl3.append(newMethod3)

listUl3.after(newMethod4)

listUl3.children[4].after(newMethod5) // De igual manera podemos integrar el hermano siguiente o anterior al padre de los li con el .children[] mas su posicion dentro de los corchetes, y la posicion funciona de la misma manera que en los metodos anteriores

listUl3.children[2].replaceWith(newMethod6)
document.getElementById('listLi3').replaceWith(newMethod7)

listUl4.after(listUl4.cloneNode(true))

listUl5.remove() // Con el remove nos cargamos la lista 5 (listUl5), como podemos ver en el html si esta, pero en la pagina no!

listUl6.removeChild(listUl6.children[1])