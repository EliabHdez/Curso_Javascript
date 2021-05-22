/* 
    Padre - parent (Nodo del que desciende)
        - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
        - parentElement - Devuelve el nodo elemento padre
    
    NOTA: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null
    
    Hijos - child (Nodo que desciende de un padre)
        - childNodes - Devuelve todos los nodos hijos
        - children - Devuelve todos los nodos elementos hijos
        - firstChild - Devuelve el primer nodo hijo
        - firstElementChild - Devuelve el primer nodo elemento hijo
        - lastChild - Devuelve el ultimo nodo hijo
        - lastElementChild - Devuelve el ultimo nodo elemento hijo
        - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene
        
    Hermanos - siblings (Nodo al mismo nivel)
        - nextSibling - Devuelve el siguiente nodo hermano
        - nextElementSibling
        - previousSibling
        - previousElementSibling
    
    Cercano
        - closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector, aun es experimental
*/

const parent = document.getElementById('listUl')
console.log(listUl.parentNode); // El padre del UL es el NAV, si estuviera dentro de un div el padre seria el div, si no estuviera dentro de ninguna etiqueta el padre seria el body
    // Al parecer el parentNode y el parentElement arrojan el mismo resultado
console.log(listUl.parentElement.parentElement.parentElement);
console.log(listUl.parentNode.parentNode.parentNode.parentNode.parentNode); // Aqui llegamos al document y como podemos ver nos arroja nul, ya que el document es el punto mas alto del html por lo tanto ya no tienen ningun padre
    // Esta es la forma de ir subiendo niveles dentro del documento. Digamos que estamos en el hijo, subimos al padre, despues al abuelo y asi sucesivamente por ponerlo de una forma mas descriptiva

console.log(listUl.childNodes);
console.log(listUl.children);
console.log(listUl.firstChild);
console.log(listUl.firstElementChild);
console.log(listUl.lastChild);
console.log(listUl.lastElementChild);
console.log(listUl.firstChild.hasChildNodes());

console.log(listUl.nextSibling);
console.log(listUl.nextElementSibling);
console.log(listUl.parentElement.nextElementSibling);
console.log(listUl.parentElement.previousSibling);
console.log(listUl.parentElement.previousElementSibling);