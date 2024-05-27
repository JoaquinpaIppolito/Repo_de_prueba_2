/* Javascript es un lenguaje basado en protitipos */


/* los arrays se usan para listar elementos
sinonimos: array, lista, coleccion/collection, arreglos, matriz
cualquier cosa que se pueda enlistar
*/


/* let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 6 */


/* let notasTrimestre = [9,10,6]

notasTrimestre[1] = 4

alert('El segundo trimestre te sacaste un: ' + notasTrimestre[1])

alert(notasTrimestre.length)  */



/* Metodos de los Arrays */

/* const nombres = 

[
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

let posicionMaria = nombres.indexOf('maria')
nombres.splice(posicionMaria,1)
let posicionJuan = nombres.indexOf('juan')
nombres.splice(posicionJuan,1)

console.log(nombres) */

/* Quiero que alex deje de ser alex y sea alexis */

/* nombres[5] = 'alexis' */


/* Quiero eliminar a alexis de mi array, o sea al ultimo elemento */

/* delete nombres[5] */ /* Esto es una mala practica */


/* .pop(): elimina el ultimo elemento del array y lo retorna */

/* nombres.pop() */


/* .shift(): elimina el primer elemento del array y lo retorna */

/* nombres.shift() */

/* push: agrega al final y retorna el nuevo lenght */
/* nombres.push('leonel') */

/* unshift: agrega al inicio y retorna el nuevo lenght */
/* nombres.unshift('leonel') */


/* Quiero que maria deje de ser maria y sea marianela */

/* nombres[2] = 'marianela' */ /* es poco practico, no se hace asi */

/*indexOF(searchString): busca el elemento en el array y si lo encuentra devuelve la posicion, sino, devuelve -1 (SOLAMENTE LO USAN EN ARRAYS DE STRINGS) */
/* let posicionMaria = nombres.indexOf('maria')
nombres[posicionMaria]='marianela' */


/* Splice(posicion, cuantosElementosElimina, nuevoElemento): recibe esos 3 argumentos */




/* let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina,1) */


/* const nombres = 
[
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex',
]


let posicionJuan = nombres.indexOf('juan')
nombres.splice(posicionJuan,1)
let posicionMaria = nombres.indexOf('maria')
nombres.splice(posicionMaria,1)


console.log(nombres) */


/*  */
/* const nombres = 
[
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex',
]


nombres.splice(nombres.indexOf('maria'),0,'carlos')


console.log(nombres) */




/* Mejorar este codigo con una funcion llamada eliminarNombre que recibira el nombre a eliminar */

/* const nombres = 

[
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]



function eliminar_nombre(listado,nombreAEliminar)
{
    listado.splice(listado.indexOf(nombreAEliminar),1)
} */























