/* 1) Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
 */



    let url = prompt("Por favor ingrese una URL valida:")
    while (url == "" || url == null )
        {
            url = prompt("Por favor ingrese una URL valida:")
        }
        if (url.includes('https://'))
            {
                console.log("la url ingresada, cuenta con certificado ssl")
            }
            else if (url.includes('http://'))
                {
                    console.log("la url ingresada, No cuenta con certificado ssl")
                }
                else if(!url.includes('http://') || !urlIngresada.includes('https://'))
            {
                console.log("No ha ingresado una Url valida")
            }