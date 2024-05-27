/* Bucles en arrays */


/* const nombres = ['pepe','juan','maria','ezequiel'] */


/* Por cada nombre quiero que aparezca un mensaje por consola diciendo 'Hola {nombre}' */



/* for (index=0;index<nombres.length;index++)
    {
        console.log('Hola: ' + nombres[index])
    } */



    /* const carrito = 
    [
        {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
        },
        {
            nombre: 'patineta',
            precio: 30,
            cantidad: 1
            }
    ] */


    /* por cada elemento de mi carrito mostrar por consola
    Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}
    */


    /* for (index=0;index<carrito.length;index++)
        {
            const producto = carrito[index]
            console.log(producto)

            console.log('Has comprado el producto: ' + producto.nombre + 'x' + producto.cantidad + 'a un precio unitario de: ' + producto.precio)
        } */


/* const personajes = 
[
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: '40'
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: '20'
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: '35'
    }

] */

/* Por cada personaje mostrar el sisguiente mensaje por consola

'Hola, mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} anios'

opcional:
Al finalizar el recorrido mostrar por consola 'total de edades: {sumatoria de las edades de los usuarios}
*/

/* let sumatoria =0

for (index=0;index<personajes.length;index++)
    {
        const personaje = personajes[index]
        console.log('Hola, mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
        let edad = Number(personaje.edad)
        sumatoria = sumatoria + edad
    }
    console.log("total de edades:" + sumatoria) */


/* for(const personaje of personajes)
    {
        console.log(personaje)
    } */


    /* Ir al ejercicio anterior y hacerlo con for of */

/*    let sumatoria =0

    for (const personaje of personajes)
        {
            console.log('Hola, mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
            let edad = Number(personaje.edad)
            sumatoria = sumatoria + edad
        }
        console.log("total de edades:" + sumatoria) */


/* const datos = 
{
    nombre: 'pepe',
    apellido: 'suarez',
    dni: '54543565'
}


let resultado= ''
for(let propiedad in datos)
    {
        resultado = resultado + '\n' + propiedad + ': ' + datos[propiedad]
    }
    console.log(resultado) */



/* METODOS AVANZADOS DE ARRAYS */


/* const personajes = 
[
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: '40'
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: '20'
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: '35'
    }

] */


/* personajes.forEach(function (personaje)
{
    console.log(personaje)
}) */

/* 
Le decimos metodo avanzado a un metodo que recibe una callback

Filter es un metodo avanzado que recibe una callback, la callback recibe un elemento

Si el valor de retorno de la callback es thruly entonces el elemento se agregara al array resultante
Si el valor de retorno de callback es falsy entonces se ignorara (pasaremos al siguiente elemento)
SIEMPRE FILTER RETORNARA UN ARRAY
Si el array es vacio significa que nadie paso el filtro
*/


/* const personajesMayoresDeEdad = personajes.filter(function(personaje)
{
    return personaje.edad >= 18
})

console.log(personajesMayoresDeEdad) */


/* const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
] */

/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

/* const productosInferiores = productos.filter(function(producto){
    return producto.precio < 2950
})

console.log(productosInferiores)

const productosNoblex = productos.filter(function(producto){
    return producto.marca.toLocaleLowerCase() == 'noblex'.toLocaleLowerCase()
})

console.log(productosNoblex)

const productosTv = productos.filter(function(producto){
    return producto.nombre.toLocaleLowerCase().includes('tv'.toLocaleLowerCase())
})




console.log(productosTv) */


/* const pepe = personajes.find(function(personaje)
{
    return personaje.nombre === 'pepe'
})

console.log(pepe) */


/* MAP

Nos sirve para crear un array en base a otro array
Va a recorrer el array y por cada elemento la callback va a ejecutarse
El valor de retorno de callback es el valor del nuevo elemento que se agregara al array resultante

RETORNA SIEMPRE UN ARRAY
*/


const objetos = 
[

    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }

]

const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>' + objeto.nombre + '</div>'
})
console.log(listaDeObjetosHTML)

/* [

    '<div>vaso</div>'
    '<div>tornillo</div>'
    '<div>computadora</div>'

    ] 
*/
