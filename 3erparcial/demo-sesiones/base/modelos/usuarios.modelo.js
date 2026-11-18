// Consultas a la tabla usuarios. Siempre con ? (consulta parametrizada), nunca pegando texto en el SQL.
const bcrypt = require('bcryptjs');

function crearModeloUsuarios(pool) {
  // Regresa el usuario (sin el hash) si la contraseña es correcta, o null si no.
  async function verificar(usuario, contrasena) {
    if (!usuario || !contrasena) return null;
    const [filas] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? LIMIT 1', [usuario]);
    const fila = filas[0];
    if (!fila) return null;

    const ok = await bcrypt.compare(contrasena, fila.contrasena_hash);
    if (!ok) return null;

    return {
      id: fila.id,
      usuario: fila.usuario,
      nombre: fila.nombre,
      rol: fila.rol,
    };
  }

  return { verificar };
}

module.exports = { crearModeloUsuarios };
