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


function descifrador (datocodificado)
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
    if (textoaverificar.includes(',') || textoaverificar.includes('@') || textoaverificar.includes('-'))
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
console.log(texto3complejidad)