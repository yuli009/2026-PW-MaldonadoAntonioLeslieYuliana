const pool = require('../bd-local');

const COLUMNAS_PUBLICAS='id, nombre, apellido, correo, boleta, rol';
   //consuktar a todos

   async function listar(){
     const [filas]=await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios ORDER BY id=?`);
    return filas[0];
   }

    async function obtenerPorId(id){
     const [filas]=await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios WHERE id=?`,[id]);
    return filas[0];
   }
   //REGISTRAR

   async function registrar(nombre, correo, contrasenaHash, boleta, rol){
        const [resultado]=await pool.query(`INSERT INTO usuarios (nombre, correo, contrasena_hash, boleta, rol) 
            VALUES (?,?,?,?,?)`,[nombre, correo, contrasenaHash, boleta, rol]);
        return obtenerPorId(resultado.insertId);
   }

   //ACTUALIZAR

   async function actualizar(id, {nombre, correo, rol}){
        const cambios= Object.entries({nombre, correo, rol}).filter(([valor])=>valor!==undefined);

        if(cambios.length===0){return obtenerPorId(id);}

        const columnas = cambios.map(([columna])=>`${columna}=?`).join(', ');
        const [info]=await pool.query(`UPDATE usuarios SET ${columnas} WHERE id=?`, [...cambios.map(([,valor])=>valor), id]);
        if(info.affectedRows===0){throw new undefinided;}//=== si solo si y debe devolver  un true o false
        return obtenerPorId(id);//.... enumeracion cuado no sabemos cuantos valores vana a cambia
   }

   //ELIMINAR
   
        async function eliminarr(id){
                const [resultado]=await pool.query(`DELETE FROM usuarios WHERE id=?`,[id]);
                return resultado.affectedRows>0;}
    
     //busar correo por  hash

     async function obtenerPorCorreo(correo){
        const [filas]=await pool.query(`SELECT * FROM usuarios WHERE correo=?`,[correo]);
        return filas[0];
     }

     module.exports={listar, obtenerPorId, registrar, actualizar, eliminar, obtenerPorCorreo};

     //debera de crear los modelos d elas tablas talleres y asisteecia
     // taller tiene  registraalumno al taller, consulltar todos los talleres

     //asistencia tiene registrar asistencia, consultar asistencia por id de taller y por id de alumno