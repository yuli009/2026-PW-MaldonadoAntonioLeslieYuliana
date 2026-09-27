const talleres = [
  { nombre: 'Introducción a Python', instructor: 'Ing. María López', cupo: 25, inscritos: 25 },
  { nombre: 'Fundamentos de Redes', instructor: 'Ing. Carlos Ramírez', cupo: 30, inscritos: 18 },
  { nombre: 'Diseño de Bases de Datos', instructor: 'Ing. Ana Torres', cupo: 20, inscritos: 20 },
  { nombre: 'Desarrollo Web con JS', instructor: 'Ing. María López', cupo: 25, inscritos: 10 },
];

function pintarTabla(){
    const tbody = document.querySelector('#tabla-talleres tbody');
    tbody.innerHTML = '';

    talleres.forEach((taller) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${taller.nombre}</td>
            <td>${taller.instructor}</td> 
            <td>${taller.cupo}</td>
            <td>${taller.inscritos}</td>
        `;
        tbody.appendChild(fila); 
    });
}

// ----------------------------------------------------
// PRIMERA PARTE: ARREGLOS
// ----------------------------------------------------
const formArreglos = document.getElementById('form-arreglos');
const resultadoArreglos = document.getElementById('resultado-arreglo');
const selectOperacionArreglo = document.getElementById('operacion-arreglo');

formArreglos.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const operacion = selectOperacionArreglo.value;

    let resultado;

    switch(operacion){
        case 'forEach':
            resultado = talleres.map((t) => `- ${t.nombre} (${t.inscritos}/${t.cupo})`).join('\n');
            break;
        case 'map':
            resultado = talleres.map((t) => t.nombre).join(', ');
            break;
        case 'filter':
            resultado = talleres.filter((t) => t.inscritos >= t.cupo).map((t) => t.nombre).join(', ');
            break;
        case 'find':
            const tallerMaria = talleres.find((t) => t.instructor === 'Ing. María López');
            resultado = tallerMaria ? `${tallerMaria.nombre} (${tallerMaria.inscritos}/${tallerMaria.cupo})` : 'No se encontró ningún taller impartido por Ing. María López';
            break;
        case 'reduce':
            const total = talleres.reduce((acumulador, t) => acumulador + t.inscritos, 0);
            resultado = `Total de alumnos inscritos en todos los talleres: ${total}`;
            break;
        case 'filterMap':
            resultado = talleres.filter((t) => t.inscritos < t.cupo).map((t) => t.nombre).join('\n');
            break;
    }

    resultadoArreglos.textContent = resultado;
    pintarTabla();
});

// Llamamos a la función para pintar la tabla al cargar la página
pintarTabla();

// ----------------------------------------------------
// SEGUNDA PARTE: OBJETOS Y JSON
// ----------------------------------------------------
const formObjeto = document.getElementById('form-objeto');
const resultadoObjeto = document.getElementById('resultado-objeto');

formObjeto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // Extraemos los datos actualizados del HTML
    const taller = {
        nombre : document.getElementById('obj_nombre').value,
        instructor : document.getElementById('obj-instructor').value,
        cupo : Number(document.getElementById('obj_cupo').value),
        inscritos : Number(document.getElementById('obj_inscritos').value)
    };

    const operacion = document.getElementById('operacion-objeto').value;
    let resultadoTexto = '';
    
    switch(operacion){
        case 'keys':
            const keys = Object.keys(taller);
            resultadoTexto = `Object.keys (Propiedades):\n${keys.join(', ')}`;
            break;
            
        case 'values':
            const values = Object.values(taller);
            resultadoTexto = `Object.values (Valores):\n${values.join(', ')}`;
            break;
            
        case 'entries':
            let listaEntries = [];
            for (const [campo, valor] of Object.entries(taller)) {
                listaEntries.push(`- ${campo}: ${valor}`);
            }
            resultadoTexto = `Object.entries (Campo y valor):\n` + listaEntries.join('\n');
            break;
            
        case 'stringify':
            const textoJson = JSON.stringify(taller, null, 2);
            resultadoTexto = `JSON.stringify (Tipo: ${typeof textoJson}):\n${textoJson}`;
            break;
            
        case 'parse': // Cambiado para que coincida con tu HTML
            const jsonString = JSON.stringify(taller, null, 2);
            const objetoDeVuelta = JSON.parse(jsonString);
            resultadoTexto = `JSON.parse (Tipo: ${typeof objetoDeVuelta}):\nObjeto recuperado exitosamente.\nPropiedad nombre: "${objetoDeVuelta.nombre}"`;
            break;
            
        default:
            resultadoTexto = 'Selecciona una operación válida.';
    }
    resultadoObjeto.textContent = resultadoTexto;
});