/* 
    Bucles

    - Indeterminados: No sabemos el numero de veces que se va a ejecutar el codigo

        - Bucle while:
            while(condicion){
                codigo a ejecutar
            }

        - Bucle do while:
            do{
                codigo a ejecutar
            }while(condicion)
*/

let pass = 'hola';

    // Bucle while se ejecuta siempre y cuando no se cumpla la condicion, si por alguna razon esta se cumple desde un inicio como en el siguiente caso donde la variable pass ya tiene el valor de hola, el bucle no se ejecutara

while (pass != 'hola') {
    pass = prompt('Introduzca su contraseña')
}
console.log('Fin del bucle');

    // Bucle do while siempre se ejecutara aunque sea solo una vez, no importa si la condicion no se cumple desde un inicio, este aun asi se ejecutara

do{
    pass = prompt('Introduzca su contraseña')
}while (pass != 'hola')

//  La diferencia la podemos notar en que si el pass tiene el valor de hola, el bucle while pasara de forma directa, ya que la condicion no se esta cumpliendo, mientras que con el bucle do while nos arrojara el prompt para escribir la contraseña ya que todavia no confirma que pass valga hola hasta que nosotros lo introduzcamos, para en el bucle while pida escribir la contraseña necesitariamos que pass no tenga ningun valor para que nosotros se lo demos mediante la escritura en el prompt y asi el bucle while pueda confirmar que pass si vale o no hola