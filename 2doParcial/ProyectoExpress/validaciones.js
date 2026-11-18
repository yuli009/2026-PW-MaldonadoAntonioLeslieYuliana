 //vamos  a dejarles 2 de las 3 funciones para validar

 function validarCorreo(correo) {

 }

function validarBoleta(boleta) {}

 function validarContrasena(contrasena) {
    if(typeof contrasena !== 'string')return false;
    return contrasena.length }

    module.exports = {validarCorreo, validarContrasena, validarBoleta};
