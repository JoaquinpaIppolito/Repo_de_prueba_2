/* 
anotaciones:

- Si una funcion no retorna nada, retorna Undefined.

Funciones Nativas


-isNaN(dato): es una funcion que recibe un dato y devuelve un booleano que indica si es o no un NaN
-alert(dato): es una funcion que recibe un string y lo muestra en un pop up en la pagina. cualquier dato que se le de lo transforma a string
-typeof(dato): Nos dice que tipo de dato es
-prompt(dato): Es una funcion que recibe un mensaje atraves de un imput y devuelve el valor ingresado por el usuario (de tipo string) o null si el usuario cancela.



*/


/* let dato = prompt()
alert('el valor ingresado es: ' + dato) */


/* IF

if (condicion){
    bloque de codigo
}
else{
    bloque de codigo
}



*/


/* 
ejemplo:

let edad = prompt('Ingrese su edad')
if(edad >= 18){
    alert('Podes Pasar')
}
else{
    alert('No Podes Pasar')
} */


/* El dato no tiene que ser null o "" */
/* let dato = prompt('Dime algo')


if (dato === null || dato === ""){
    alert('Error, dato no valido')
}
else{
    alert('Todo esta bien')
} */


/* let dato = prompt('Dime algo')


if (!dato){
    alert('Error, dato no valido')
}
else{
    alert('Todo esta bien')
} */


/* Si el puntaje da entre 0 y 1000 diremos principiante
Si el puntajeda entre 1000 y 3000 diremos avanzado
Si el puntaje es mayor a 3000 diremos experto */

/* let puntos = prompt('Ingresa tus puntos')

if(puntos>=0 && puntos <=1000){
    alert('Principiante')
}
else if (puntos > 1000 && puntos <= 3000){
    alert('Avanzado/a')
}
else if (puntos > 3000){
    alert('Experto/a')
}
else{
    alert('Error, dato no valido')
} */


/* Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta. */
/* 
let tienehijos =true
alert(tienehijos) */




/* Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta. */

/* let salario = prompt('Ingrese su salario actual')
salario= (salario*12)
alert('su salario anual es: ' + salario) */



/* Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta. */


/*  */

/* let edad = prompt('Especifique su edad:')

if(edad>=18){
    alert('Eres mayor de edad')
}
else{
alert('Eres menor de edad')
}  */



/* OPCIONAL:
16.De un empleado se sabe su sueldo y los años de antigüedad. el sector de contabilidad nos pide hacer un programa que lea los datos y nos muestre.

1)  Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.

2)  Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.

3)  Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios. */


/* let sueldo = 600
let antiguedad = 9

if(sueldo < 500 && antiguedad >= 10){
    alert('Sueldo a pagar:' + (sueldo + sueldo*0.2))
}
else if(sueldo < 500 && antiguedad < 10){
    alert('Sueldo a pagar:' + (sueldo + sueldo*0.05))
}
else if(sueldo>=500){
    alert('Sin Cambios')
}
 */

