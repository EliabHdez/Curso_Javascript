/* 4.- Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no
    Un numero primo es aquel que solo es divisible por sí mísmo y la unidad */

    let num = parseInt(prompt(`Introduzca un numero`))
    let divisores = 0

    if(num === 1){
    console.log(`1 no es válido ya que no es un número primo ni compuesto`)
    // divisores++
    }else{
        for(i = 2; i < num; i++){
            if (num % i == 0) {
                console.log(`${num} / ${i} = ${num/i} - ${num} no es un número primo`)
                // divisores++
                break
            }else{
                if(divisores == 0)
                console.log(`${num} - ${num} es un número primo`);
            }
        }
    }
    // if(divisores == 0)
    // console.log(`${num} - ${num} es un número primo`);