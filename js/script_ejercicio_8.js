/* 8.- Dado un array de letras, solicita un numero DNI y cálcula que letra le corresponde. El número no puede ser negativo ni tener mas de 8 digítos. La posición de la letra es el resultaado del módulo del número introducido entre 23 */

// let alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z]
const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let dni = prompt(`"Introduce tu DNI" (Este no puede contener mas de 8 digítos y tampoco pueden ser números negativos)`)

// if(dni.length == 8 && parseInt(dni) > 0){
//     console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`);
// }

// if(dni.length == 8 && parseInt(dni) > 0){
//     letra = dni % 23
//     console.log(`Tu DNI completo es ${dni}${letras[letra]}`);
/* else if(dni.length > 8){
    prompt(`Tu DNI no puede tener mas de 8 digítos`)
}else if(dni.length < 8){
    prompt(`Tu DNI no puede tener menos de 8 digítos`)
}else{
    (parseInt(dni) < 0)
        prompt(`Tu DNI no puede tener números negativos`)
} */
while(dni.length != 8){
    dni = prompt(`Tu DNI no debe contener mas/menos de 8 digítos y estos no pueden ser negativos`)
}
if(dni.length == 8 && parseInt(dni) > 0){
    letra = dni % 23
    console.log(`Tu DNI completo es ${dni}${letras[letra]}`);
}