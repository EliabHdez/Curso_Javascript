/* 
    - document.getElementaryById('id') - Acceder a un elemento a traves de su id
    - document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
    - document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList

    Los elementos siempre se guardan en una constante ya que nunca van a cambiar
*/

const title = document.getElementById('title')
console.log(title.textContent);

// title.textContent = 'DOM - Accediendo a los nodos'
// const title2 = document.getElementById('title')
// console.log(title2.textContent);

const paragraphFc = document.querySelector('.paragraph:nth-child(1)')
const paragraphNc = document.querySelector('.paragraph:nth-child(2)')
const paragraphLc = document.querySelector('.paragraph:nth-child(3)')

console.log(paragraphFc);
console.log(paragraphNc);
console.log(paragraphLc);

const paragraphText = document.querySelector('.paragraph')
console.log(paragraphText.textContent);

const paragraph = document.querySelector('.paragraph')
const span = paragraph. querySelector('span')
console.log(span.textContent);

const span1 = document.getElementById('title').querySelector('span')
console.log(span1.textContent);

//  Esto es como ir bajando una escalera, ejemplo, si tenemos un title, dentro del title un span y dentro de un span un a tenemos que empezar por el padre e ir descendiendo hasta llegar al hijo mas chico, vaya tenemos que entrar primero en el title, luego en el span y por utlimo en el a con punto(.) desde el elemento padre hasta el que queramos descender, claro utilizando el ."n" (.getElement..., querySelector) que necesitemos ocupar, si vamos a acceder en un elemento es con el getElement y si vamos a acceder a una clase de un selector de css con querySelector, para entender un poco mejor esto, ver los ejercicios echos arriba

const paragraphs = document.querySelectorAll('.paragraph')
console.log(paragraphs);

paragraphs[0].style.color = 'red' // Cabe aclarar que darle estilos de esta forma y en el archivo js no es lo mas indicado ni lo mas recomendable, esto se hizo con fines didacticos, sin embargo hay que evitarlo a medida que sea posible y solo hacerlo en casos muy concretos y especificos

/* paragraphs.map(p => p.style.color='green')
    Con esto podemos ver que un nodeList no es un array
    
Un array es diferente a un nodeList, aunque en consola se vea muy similar no es igual, de echo en consola nos especiica que es nodeList*/

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
paragraphsSpread.map(p => p.style.color = 'green')
    //  El problema de ocupar de esta manera y para esto el spread operator es que aunque hay mucho soporte ya en los navegadores puede que de problemas en algo, es cierto que de que hizo dorian el curso ya pasaron casi 3 años, por lo tanto puede que ya no sea asi y ya hay un soporte completo y ya no de problemas ocupar el spread operator asi y en estos casos. Lo recomendable es utilizar array.from con esto nos aseguramos de que se convierta en un array y funcione sin problema

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))
paragraphsArray.map(p => p.style.color = 'blue')