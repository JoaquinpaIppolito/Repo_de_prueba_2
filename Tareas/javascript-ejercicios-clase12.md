/* TAREA CLASE 12 */

/* Determinar el resultado y corroborar con consola:

(true > true || 9) && Number(Boolean(1)) > 0 || 'pepe'
      (false || 9) && Number(true) > 0 || 'pepe'
           9  &&  1 > 0  || 'pepe'
        9 &&  true || 'pepe'
            true || 'pepe'
                true


'valor' === "VALOR" || NaN == NaN && '1' === !'-1'
        false || false && '1' === !'-1'
            false && '1' === false
            false && false
            false


DETERMINAR EL ORDEN DE LOS NOMBRES

let nombre = 'pepe' 
console.log(nombre) 

{ 
    let nombre = 'pedro' 
    console.log(nombre) 
    { 
        let nombre = 'maria' 
        console.log(nombre) 
    } 

    { 
        let nombre = 'leonel' 
        console.log(nombre) 
        { 
        nombre = 'julieta' 
        console.log(nombre) 
        } 
        console.log(nombre) 
    } 

    console.log(nombre) 
    nombre = 'juan' 
} 
console.log(nombre) 

*/


/* Resultados: */
/* 
pepe
pedro
maria
leonel
julieta
julieta (toma el valor del ambito mas cercano)
pedro (toma el valor de su ambito)
pepe (toma el valor "global" q es pepe)
*/