/* DRY: dont repeat yourself (no te repitas)

*/


/* Solicitar un nombre al usuario, si el nombre es "pepe" seguir solicitando el nombre, cuando sea distinto de pepe, decir, 'ese nombre no lo conozco'  */


/* let nombre= prompt('Ingrese su nombre: ')

while (nombre==='pepe') {
    nombre= prompt('Ingrese su nombre: ')
}
alert('Ese nombre no lo conozco') */


let nombre= prompt('Ingrese su nombre: ')

while (!nombre) {
    alert('Dato incorrecto')
    nombre= prompt('Ingrese nuevamente el valor: ')
}
alert('Dato correcto')