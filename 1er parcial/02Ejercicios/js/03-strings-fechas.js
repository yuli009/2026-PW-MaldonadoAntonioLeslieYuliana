<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejecicios con Node</title>
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
    <header>
        <a href="../../index.html">Index principal</a>
    <br>
        <h1>Ejercicios con node</h1>
    </header>
    <main>
        <section class="ejercicio" >
            <h2 id="titulo-arreglos"> Arreglos del codigo <code>01-arreglos.js</code> </h2>
            <p>Datos de prueba con JS</p>
            <div class="centrado">
                <table id="tabla-talleres">
                    
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Instructor</th>
                            <th>Cupo</th>
                            <th>Inscritos</th>
                        </tr>
                    </thead>
                    <br>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
            
            <br><br>

            <form id="form-arreglos" class="formulario" >
                <div class="campos" >
                    <label for="operacion-arreglo" name="operacion-arreglo">Operación</label>
                    <select name="operacion-arreglo" id="operacion-arreglo">
                        <option value="forEach">ForEach - Lista Simple</option>
                        <option value="map">map - Copia solo Nombres</option>
                        <option value="filter">filter - Filtrar Talleres con cupo lleno</option>
                        <option value="find">find - Buscar por el nombre del instructor</option>
                        <option value="reduce">reduce - Total de inscritos</option>
                        <option value="filtermap">filter + map - Talleres cupo disponible</option>
                    </select>
                </div>

                <button type="submit" >Ejecuta</button>

            </form>

            <output class="resultado" id="resultado-arreglo" for="form-arreglos" ></output>
        </section>

        <section class="ejercicio" aria-labelledby="titulo-objeto">

            <h2 id="titulo-objeto">Manejo de los objetos JSON</h2>
            <p>Edita taller y elije las operaciones que deceas editar</p>

            <form id="form-objeto" action="form-objeto" class="formulario">

                <div class="campo">
                    <label for="obj-nombre">Nombre</label>
                    <input type="text" name="obj-nombre" id="obj-nombre" value="Introduccion a python">
                </div>

                <div class="campo">
                    <label for="obj-instructor">Instructor</label>
                    <input type="text" name="obj-instructor" id="obj-instructor" value="Instructor Maria Lopez">
                </div>

                <div class="campo">
                    <label for="obj-cupo">Cupo</label>
                    <input type="number" name="obj-cupo" id="obj-cupo" min="0">
                </div>

                <div class="campo">
                    <label for="obj-inscritos">Inscritos</label>
                    <input type="number" name="obj-inscritos" id="obj-inscritos" value="25" min="0">
                </div>

                <div class="campo">
                    <label for="operacion-objeto">Tipo de operacion</label>
                    <select name="operacion-objeto" id="operacion-objeto">
                        <option value="keys">Objec.Keys</option>
                        <option value="values">Object.values</option>
                        <option value="entries">Object.entries</option>
                        <option value="stringify">JSON cadena</option>
                        <option value="roundtrip">Ida y vuelta cadena JSON</option>
                    </select>
                </div>

                <button type="submit">Ejecutar opciones</button>

            </form>

            <output class="resultado" id="resultado-objeto" for="form-objeto"></output>

        </section>

        <section class="ejercicio" aria-labelledby="titulo-texto">
            
            <h2 id="titulo-texto">3. -String y txto</h2>
            <p>La fecha usa el mismo formaato <strong>DD/MM/AAAA</strong> valido con reegex</p>

            <form id="form-texto" action="form-texto" class="formulario">

                <div class="campo">
                    <label for="texto-nombre">Nombre con espacios a proposito</label>
                    <input type="text" name="texto-nombre" id="texto-nombre" value="  María López  ">
                </div>

                <div class="campo">
                    <label for="texto-cupo">Cupo para el uso del templo </label>
                    <input type="text" name="texto-cupo" id="texto-cupo" value="25">
                </div>

                <div class="campo">
                    <label for="texto-feha">Fecha de asistencia (DD/MM/AAAA) </label>
                    <input type="text" name="texto-feha" id="texto-feha" value="05/09/2026">
                    <span class="error" id="error-fecha"></span>
                </div>

                <button type="submit">Ejecutar</button>

            </form>

            <output class="resultado" id="resultado-texto" for="form-texto"></output>

        </section>

      <iframe width="451" height="802" src="https://www.youtube.com/embed/Qn8ogVTtuA8" title="LA CALABAZA #viral #shorts #kitty #viralvideo #kittens #funny #fyp #cat #cute #views" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </main>

    <script src="./js/app.js" ></script>

    
    
</body>
</html>