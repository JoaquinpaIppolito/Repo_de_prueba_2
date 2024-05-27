/* 28) Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs */


let aPie = 5
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
}