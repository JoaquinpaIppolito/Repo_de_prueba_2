/* 5) Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
    una mayuscula, sino decir "tiene minuscula"    */

    function verifica_mayusculas (palabraRecibida)

    {
        let enMinuscula = palabraRecibida.toLowerCase()
        if (palabraRecibida == enMinuscula)
            {
                return (palabraRecibida + ' ' + 'Tiene Minuscula')
            }
        else
            {
                return (palabraRecibida + ' ' + 'Tiene MAYUSCULA')
            }
    }


    let palabra =''
    while (palabra == "" || palabra == null)
            {
                palabra = prompt("Ingrese una palabra")
            }
            let resultado = verifica_mayusculas(palabra)
            console.log(resultado)