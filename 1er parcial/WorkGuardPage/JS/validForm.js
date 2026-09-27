
const patrones = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,60}$/,

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    mensaje: /^.{1,500}$/,

};

const mensajes = {
    nombre: "Solo letras y espacios entre 2 y 60 caracteres.",
    email: "El correo electrónico no es válido.",
    mensaje: "El mensaje debe tener entre 1 y 500 caracteres."
};

function validarCampo(campo, valor) {
    return patrones[campo].test(valor.trim());
}

if (typeof document !== 'undefined') {
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita el envío automático

        let formularioValido = true;

        for (const campo of Object.keys(patrones)) {
            const input = document.getElementById(campo);
            const textArea = document.getElementById(campo);

            const errorSpan = document.getElementById(`error-${campo}`);

            const esValido = validarCampo(campo, input.value);

            input.classList.toggle('invalido', !esValido);
            textArea.classList.toggle('invalido', !esValido);


            if (errorSpan) {
                errorSpan.textContent = esValido ? '' : mensajes[campo];
            }

            if (!esValido) {
                formularioValido = false;
            }
        }

        const mensajeExito = document.getElementById('mensaje-exito');
        if (mensajeExito) {
            if(formularioValido){
                mensajeExito.textContent = `¡Gracias! Tu mensaje ha sido enviado con éxito.`;
                mensajeExito.classList.remove('oculto');

                formulario.reset();

                setTimeout(() => {
                    mensajeExito.classList.add('oculto');
                }, 2000);
            }
        }
    });
}