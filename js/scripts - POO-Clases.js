class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
            // Dentro del constructor podemos utilizar solo el valor del this, poniendo solo nombre, apellido etc, pero solo estando dentro del constructor esto debido a que estando dentro del constructor hay algo que se llama y hace referencia a solo nombre, apellido, edad, sin embargo fuera de el ya no es asi
    }
    saludar(){ // Esto es un metodo (funcion, pero en las clases se llama metodo)
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
            // Fuera del constructor es necesario utilizar el this.x como en este caso this.name, this.apellido, si no ponemos el this no dara un error, ya que fuera del constructor tenemos que utilizar las propiedades del constructor y no los valores de las propiedades. Esto es debido a que fuera del constructor no hay nada que se llame nombre, apellido, edad, por lo tanto necesitamos llamar a estos valores por medio de las propiedades del constructor
    }
}

const moises = new Persona('Moisés', 'Hernández', 30)
const efrain = new Persona('Efraín', 'Hernández', 32)
const nahun = new Persona('Nahún', 'Fernández', 47)

console.log(moises);
console.log(moises.saludar());
console.log(efrain.saludar());
console.log(nahun.saludar());