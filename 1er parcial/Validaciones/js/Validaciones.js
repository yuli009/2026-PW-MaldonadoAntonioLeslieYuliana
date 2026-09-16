/*
Las validaciones para este formulario se realizaran  mediante el uso de Expresiones Regulares, las cuales las vamos a dividir en 3:
1.- Texto para el nombre
2.- Numerico para la boleta
3.- Debe tener un patron para la fecha

Las expresiones regulares, son patrones que nos ayudan a validar cadenas bajo ciertas condiciones.
*/ 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");
  const nombre = document.getElementById("nombre");
  const boleta = document.getElementById("boleta");
  const fecha = document.getElementById("fecha");

  const errorNombre = document.getElementById("error-nombre");
  const errorBoleta = document.getElementById("error-boleta");
  const errorFecha = document.getElementById("error-fecha");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let valido = true;

    // limpiar mensajes previos
    errorNombre.textContent = "";
    errorBoleta.textContent = "";
    errorFecha.textContent = "";
    mensajeExito.textContent = "";

    // validar nombre
    if (nombre.value.trim() === "") {
      errorNombre.textContent = "El nombre es obligatorio.";
      valido = false;
    }

    // validar boleta
    if (boleta.value.trim() === "") {
      errorBoleta.textContent = "La boleta es obligatoria.";
      valido = false;
    }

    // validar fecha DD/MM/AAAA)
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexFecha.test(fecha.value.trim())) {
      errorFecha.textContent = "La fecha debe tener formato DD/MM/AAAA.";
      valido = false;
    }

    if (valido) {
      mensajeExito.textContent = "¡Registro exitoso!";
      form.reset(); 
    }
  });
});
