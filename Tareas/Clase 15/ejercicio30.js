/*30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true  */


function esVocal (letra)
{
    return (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
}


let letraA = esVocal('a')
let letraN = esVocal('n')
let letraE = esVocal('e')
console.log('Son Vocales:' + '\n' + 'letra A: ' + letraA + '\n' + "letra N: " + letraN + '\n' + "letra E:" + letraE)