/* OPERADORES LOGICOS */

/* 
!: NOT o negacion 
Nos da el valor booleano opuesto al dato que estoy negando
*/


/* 
||: OR o O Logico
Seleccionar
Si el primer valor es un valor falsy, va a seleccionar el segundo valor
Si el primer valor es verdadero, va a seleccionar el primer valor


console.log(0 || 'pepe' || 'juan')
*/


/* 
&: ALT + 38
&&: AND o Y logico

Evalua si el primer valor es true o un falsy 
    -Si es false:
        devuelve el primer valor
    -Si es true:
        devuelve el segundo valor

    console.log(0 && 7)

    console.log(true && 7)

    var estado = true


    estado && console.log('LLego el mensaje')
    console.log(1 && 1 && 'pepe')
*/




/* 
4 && false || 'pepe'   string  'pepe'

8 == '8' || 1 === '1'   boolean true

(null == NaN) || Boolean(NaN)    false
false
*/





/* Variables */


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
