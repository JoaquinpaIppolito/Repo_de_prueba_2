/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true*/

function puedeVerPelicula (edad,tieneAutorizacion)

{
    if (edad >=15 || tieneAutorizacion == true)
        {
            return true
        }
    else
        {
            return false
        }

}

let user1 = puedeVerPelicula(12, false)
let user2 =puedeVerPelicula(12, true)
let user3 =puedeVerPelicula(16, false)
let user4 =puedeVerPelicula(18, true)
 console.log('user1: ' + user1 + "\n" + 'user2: ' + user2 + "\n" + 'user3: ' + user3 + "\n" + 'user4: ' + user4)