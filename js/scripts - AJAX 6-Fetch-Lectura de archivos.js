/* 
    Fetch API

        blob() - Binary long object
*/

const buttonImg = document.getElementById('b-image')
const buttonPdf = document.getElementById('b-pdf')

buttonImg.addEventListener('click', () => {
    fetch('../images/husky.jpg')
    .then(ans => ans.blob())
    .then(img => {
        document.getElementById('image').src = URL.createObjectURL(img) // Esto lo que hace es crear una url para poder ver la imagen. Si abrimos consola cada vez que le damos al boton see image podremos observar que la url cambia y esto es debido a que con esta linea de codigo lo que hacemos es generar una url para poder visualizar la imagen
    })
})
buttonPdf.addEventListener('click', () => {
    fetch('../pdf_files/PDF prueba_1.pdf')
    .then(ans => ans.blob())
    .then(pdf => {
        document.getElementById('a-pdf').href = URL.createObjectURL(pdf) // Esto hace lo mismo que lo anterior solo que para el archivo pdf que lo generamos al presionar el boton load pdf y para visualizarlo hacemos uso del link download. Esto no lo explico pero trato de entender que esto es asi debido que el boton no tiene donde almacenar ese archivo para su visualizacion posterior y al no poderlo poner de forma directa en una etiqueta como la imagen necesitamos hacer uso de una etiqueta donde si podamos ponerlo para despues verlo, es por eso que no lo podemos visualizar solo presionando el button, si no que nos tenemos que apoyar del link que es una etiqueta que si puede guardar este tipo de contenido. Por lo tanto lo que hacemos con el button es cargar el el archivo y con el link logramos verlo. Vaya la imagen la podemos ver con solo presionar el button pero el pdf no ya que la imagen la tenemos en una etiqueta tal cual de img la cual ligamos al callback del evento, en cambio el pdf no, por lo tanto tenemos que cargar el archivo mediante el button pero hacemos uso de un link que pueda almacenar este archivo en el html para asi pder verlo
    })
})