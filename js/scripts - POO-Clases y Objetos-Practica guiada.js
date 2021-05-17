/* 
    1.- Crea una clase libro
    2.- La clase libro tendra título, autor, año y género
    3.- Crea un método que devuelva toda la información del libro
    4.- Pide 3 libros y guárdalos en un array
    5.- Los libros se introducirán al arrancar el programa pidiendo los datos con prompt
    6.- Validar que los campos no se introduzcan vacíos
    7.- Validar que el año sea un número y que tenga 4 dígitos
    8.- Validar que el género sea: Aventuras, Terror o Fantasía
    9.- Crea una función que muestre todos los libros
    10.- Crea una función que muestre los autores ordenados alfabéticamente
    11.- Crea una función qie pida un género y muestre la información de los libros que pertenezcan a ese género usando un/el método que devuelve la información
*/

class Book {
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    bookInfo(){
        return `Título: ${this.title}- Autor: ${this.author}- Año: ${this.year}- Género: ${this.gender}`
        // return `${this.title} es un libro escrito por ${this.author}, escrito en el año ${this.year} y pertenece al género de ${this.gender}`
    }
    getAuthor(){
        return this.author
    }
    getGender(){
        return this.gender
    }
}

let books = []

while(books.length < 4){
    let title = prompt(`Introduce el Título del libro`)
    let author = prompt(`Introduce el Autor del libro`)
    let year = prompt(`Introduce el año del libro`)
    let gender = prompt(`Introduce el género del libro`).toLowerCase()

    if(title != ' ' && author != ' ' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')){
        books.push(new Book(title, author, year, gender))
    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []

    for (const book of books){
        authors.push(book.getAuthor())
    }
    console.log(authors.sort());
}

const showGender = () => {
    const gender = prompt(`Introduce el género a buscar`)

    for (const book of books){
        if (book.getGender() == gender){
           console.log(book.bookInfo());
        }
    }
}
showAllBooks()
showAuthors()
showGender()