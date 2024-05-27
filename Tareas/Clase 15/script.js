
/* 1) Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
 */



    /* let url = prompt("Por favor ingrese una URL valida:")
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
            } */


/* 2= Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal" */

/* descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar */

/* "el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18 */

/* Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" */


/* function descifrador (datocodificado)
{
    let decodificado = datocodificado.replaceAll('%20',' ');
    return decodificado
}

function contador_de_caracteres (stringRecibido)
{
    if (stringRecibido.length <8)
        {
            return "el mensaje es corto"
        }
        else if (stringRecibido.length >=9 && stringRecibido.length <=18)
            {
                return "el mensaje es mediano"
            }
            else if (stringRecibido.length > 18)
                {
                    return "el mensaje es largo"
                }
}


function verificador_complejidad(textoaverificar)
{
    if (textoaverificar.includes(',') && textoaverificar.includes('@') && textoaverificar.includes('-'))
        {
            return "El mensaje es complejo"
        }
        else
        {
            return "El mensaje no es complejo"
        }
}


let texto1 = ("hola%20como%20estas,%20todo%20bien?")
let texto1descifrado = descifrador(texto1)
console.log(texto1descifrado)

let texto1caracteres = contador_de_caracteres(texto1descifrado)
console.log(texto1caracteres)

let texto1complejidad = verificador_complejidad(texto1descifrado)
console.log(texto1complejidad)



let texto2 = ("no%20me%20siento%20bien")
let texto2descifrado = descifrador(texto2)
console.log(texto2descifrado)

let texto2caracteres = contador_de_caracteres(texto2descifrado)
console.log(texto2caracteres)

let texto2complejidad = verificador_complejidad(texto2descifrado)
console.log(texto2complejidad)


let texto3 = ("que%20mal")
let texto3descifrado = descifrador(texto3)
console.log(texto3descifrado)

let texto3caracteres = contador_de_caracteres(texto3descifrado)
console.log(texto3caracteres)

let texto3complejidad = verificador_complejidad(texto3descifrado)
console.log(texto3complejidad) */


/* 3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */


/* function codificador (datoParaCodificar)
{
    return datoParaCodificar.replaceAll(' ','%20');

}


function decodificador (datocodificado)
{
    return datocodificado.replaceAll('%20',' ');
}




let mensaje = prompt("Ingrese un mensaje para ser cifrado")
while (mensaje == "" || mensaje == null )
    {
        mensaje = prompt("Ingrese un mensaje para ser cifrado")
    }
    let mensajeCodificado = codificador(mensaje)
    console.log(mensajeCodificado)
    let mensajeDecodificado = decodificador(mensajeCodificado)
    console.log(mensajeDecodificado) */



/* 5) Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
    una mayuscula, sino decir "tiene minuscula"    */

    /* function verifica_mayusculas (palabraRecibida)

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
            console.log(resultado) */


/* 28) Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs */


/* let aPie = 5
let enBicicleta = 10
let enAuto = 50



let distanciaRecorrido = prompt('Ingresa la distancia del recorrido')
while (isNaN(distanciaRecorrido) || distanciaRecorrido === "" || distanciaRecorrido === null )
    {
        distanciaRecorrido = prompt("Ingresa la distancia del recorrido")
    }
let resultadoEnBicicleta = en_bici(distanciaRecorrido)
let resultadoAPie = a_pie(distanciaRecorrido)
let resultadoEnAuto = en_auto(distanciaRecorrido)

alert('Para la distancia: ' + distanciaRecorrido + 'Km:' + ' En bicicleta: el tiempo de viaje es ' + resultadoEnBicicleta + 'hora/s' + ' ,' + ' A pie: ' + resultadoAPie + 'hora/s' + ' y en auto: ' + resultadoEnAuto + 'hora/s')

function a_pie (dato)
{
    return (dato / aPie)
}

function en_bici (dato)
{
    return (dato / enBicicleta)
}

function en_auto (dato)
{
    return (dato / enAuto)
} */


/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true*/

/* function puedeVerPelicula (edad,tieneAutorizacion)

{
    if (edad >=15 || tieneAutorizacion == true)
        {
            return true
        }
    else
        {
            return false
        }

}

let user1 = puedeVerPelicula(12, false)
let user2 =puedeVerPelicula(12, true)
let user3 =puedeVerPelicula(16, false)
let user4 =puedeVerPelicula(18, true)
 console.log('user1: ' + user1 + "\n" + 'user2: ' + user2 + "\n" + 'user3: ' + user3 + "\n" + 'user4: ' + user4) */


/*30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true  */


/* function esVocal (letra)
{
    return (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
}


let letraA = esVocal('a')
let letraN = esVocal('n')
let letraE = esVocal('e')
console.log('Son Vocales:' + '\n' + 'letra A: ' + letraA + '\n' + "letra N: " + letraN + '\n' + "letra E:" + letraE) */
