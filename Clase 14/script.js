/* 
Quiero un programa que dado un nombre me muestre un alerta con el nombre 3 veces
*/


/*FOR cuando queremos repetir algo x cantidad de veces */


/* SINTAXIS

for(let iterador = valor_inicial; limite (mientras mi iterador sea menor o igual a 3); actualizacion)
*/


/* for (let iterador = 1; iterador <=3;iterador=iterador+1)
    {
        console.log("me ejecuto")
    } */


    /* Mostrar por alerta el conteo del 1 al 10 */

/* for(let i=1;i<=10;i=i+1)
    {
        alert(i)
    } */


    /* 
    Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes una alerta que muestre la sumatoria de los 3 numeros
    */

/*     let sumatoria = 0

    for(let i=1;i<=3;i++)
        {
            let a=prompt("Ponga un numero")
            a = Number(a)
            sumatoria = sumatoria + a
        }
        
        alert("resultado: " + sumatoria) */


/*  */


/* alert('lista: \n-pepe\n-juan') */


/* Tarea

Solicitar al usuario la cantidad de personas en la clase (numero) Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre

(
    Si la cantidad de personas de clase es 5, van a solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:

'Lista de alumnos:
- Juan
-Pepe
- Maria
etc
*/

/* let acumulador = ""
let cantidaddepersonas = validador()
cantidaddepersonas = Number(cantidaddepersonas)

function validador()
{
    numeroingresado = prompt("Por favor ingrese el numero de personas de la clase")
    while(!numeroingresado || isNaN(numeroingresado))
        {
            numeroingresado = prompt("Por favor ingrese el numero de personas de la clase")
        }
        return numeroingresado
        
}

for (i=1;i<=cantidaddepersonas;i++)
{
    let a = prompt ('Ingrese un nombre')
    acumulador = acumulador + "\n-" + a
}

alert("lista de personas" + acumulador) */







/* Funciones */

/* Declarar mi funcion */

/* function sumar2Mas2()
{
    console.log('El Resultado de la suma es' + (2 + 2))
} */


/* Invocacion o llamada de la funcion */
/* sumar2Mas2() */


/* function sumar (a,b){
    a= a + 1
console.log('El resultado de la suma es' + (a + b))

} */

/* function sumar (a,b){
    a= a + 1
console.log('El resultado de la suma es' + (a + b))

}


sumar(9,8)
sumar(1,1) */


/* function saludar (nombre)
{
    alert("Hola" + nombre)
}

saludar('Pepe') */



/* function restar(a,b)
{
    return (a -b)
}

let numero1 =10
let numero2 =5
let resultado = restar(numero1, numero2)
console.log(resultado) */


/* function sumar(a,b)
{
    return(a + b)
}


alert('El Resultado de mi suma es: ' + sumar(9,8)) */



/* CalcularIva(precio) =>> el valor del iva
 */
/* function calculariva (a)
{
    return (a * 0.21)
}




/* EJERCICIO: CalcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
*/


/* function calcularMinutos(horas)
{
    return (horas * 60)
} */



/* Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero */

/* let numeroingresado

function validador()
{
    numeroingresado = prompt("Ingrese un numero")
    while(!numeroingresado || isNaN(numeroingresado))
        {
            numeroingresado = prompt("Ingrese un numero")
        }
        numeroingresado = Number(numeroingresado)
        return numeroingresado
        
}

validador()
alert("El Numero es" + numeroingresado) */






/* String.length = longitud del String */
/* Ej: 'pepe.length = 4 */

/* method string.toLowerCase() pasa a minuscula*/ 

/* method string.toUpperCase() pasa a Mayuscula*/ 

/* method string.trim() = eliminar espacios */
/* console.log('pepe hola '.trim()) */

/* method string.includes(string_buscado) = verificar si el string buscado esta dentro del string (Retorna booleano) */

/* console.log("tv samsung".includes('Samsung')) */

/* method string.replaceall(string_a_reemplazar,valor_nuevo) */

/* console.log("tv samsung".replaceAll(' ','-')) */

/* method string.repeat(string_a_repetir) */

/* console.log('tv samsung '.repeat(3)) */

/* let password = 'pepe123'
console.log('*'.repeat(password.length)) */





/* calcularIva(precio) el valor del Iva
calcularIva(100) ==> 21
*/

