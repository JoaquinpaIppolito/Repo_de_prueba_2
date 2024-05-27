/* 3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */


function codificador (datoParaCodificar)
{
    return datoParaCodificar.replaceAll(' ','%20');

}


function decodificador (datocodificado)
{
    return datocodificado.replaceAll('%20',' ');
}




let mensaje = prompt("Ingrese un mensaje para ser cifrado")
while (mensaje == "" || mensaje == null )
    {
        mensaje = prompt("Ingrese un mensaje para ser cifrado")
    }
    let mensajeCodificado = codificador(mensaje)
    console.log('Mensaje codificado: ' + '\n' + mensajeCodificado)
    let mensajeDecodificado = decodificador(mensajeCodificado)
    console.log('Mensaje decodificado: ' + '\n' + mensajeDecodificado)