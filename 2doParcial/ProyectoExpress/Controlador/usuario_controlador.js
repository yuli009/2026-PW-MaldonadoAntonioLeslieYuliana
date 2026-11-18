const bcrypt = require('bcryptjs');
 const usuarioModelo = require('../Modelo/usuarios_modelo');

 const{validarCorreo, validarContrasena, validarBoleta}=require('../validaciones');

 function esDuplicado(error){
    return error.code ==='ER_DUP_ENTRY'|| error.code ==='23505';
 }

 async function listarUsuario(req, res) {
    try {
        const usuarios = await usuarioModelo.listar();
        res.json(usuarios);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
 }


 async function ObterUsuario(req, res) {
    try {
        const usuario = await usuarioModelo.obtenerPorId(req.params.id);
    
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 }


 //deberan realizar  lso controoladores de asistencia y talleres con dunciones correspondientes

 async function crearUsuario(req, res) {
    const{nombre, correo, contrasena, boleta, rol}=req.body;

    if(!nombre || !correo || !contrasena || !boleta){
        return res.status(400).json({error: 'Los campos nombre, correo, constraseña, boleta son obligatorias'});
    }
    
    if(!validarCorreo(correo)){
        return res.status(400).json({error: 'El correo no tiene un formato valido'})
    }
    if(!validarBoleta(boleta)){
        return res.status(400).json({error: 'La boleta debe tenr 10 dijitos'})
    }
    if(!validarContrasena(contrasena)){
        return res.status(400).json({error: 'La constrasela dene tener al menos 8 caracteres'})
    }
try {
        const contrasenaHash = await bcrypt.hash(contrasena, 10);
        const usuario = await usuarioModelo.crear({ nombre, correo, contrasenaHash, boleta, rol });
        res.status(201).json(usuario);
    } catch (error) {
        if (esDuplicado(error)) {
            return res.status(409).json({ error: 'Ya existe un usuario con ese correo o boleta registrado' });
        }
        res.status(500).json({ error: error.message });
    }
}

async function actualizarUsuario(req, res){
    const { nombre, correo, rol } = req.body;

    if(nombre === undefined && correo === undefined && rol === undefined){
        return res.status(400).json({ error: 'Al menos un campo (nombre, correo o rol) debe ser proporcionado para actualizar' });
    }

    if(correo !== undefined && !validarCorreo(correo)){
        return res.status(400).json({ error: 'El correo no tiene un formato valido' });
    }

    try {
        const usuario = await usuarioModelo.actualizar(req.params.id, { nombre, correo, rol });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
     res.json(usuario);
    } catch (error) {
        if (esDuplicado(error)) {
            return res.status(409).json({ error: 'Ya existe un usuario con ese correo registrado' });
        }
        res.status(500).json({ error: error.message }); 
    }

    async function eliminarUsuario(req, res) {
        try {
            const eliminado = await usuarioModelo.eliminar(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.status(204).send();
        }catch (error) {
            res.status(500).json({ error: error.message });
        }   
    }
}