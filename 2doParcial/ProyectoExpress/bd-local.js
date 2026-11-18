const mysql = require('mysql/promise');

//La base de datos local la usaremos para verificarr prubas interas, se buscara que debn de crea r cada uno una cuenta en supabase.com y generaremos una api  para cocnetarnos a un servicio en bd en la nube, para ello debemos configurar el archivo .env


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cecyt9_local',
    dateStrings: true,
});