const express = require('express');
const app = express();
app.use(express.json());

const PORT = 4000;

//EJEMPLO DE UNA PETICION POR MEDIO DE RUTA PPRINCIPAL GET

app.get('/saludo', (req, res) => {
    res.json({ message: 'Hola, esto es una prueba en GET' });
});

app.post('/eco', (req, res) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({ error: 'El campo "texto" es obligatorio' });
    }
    res.status(201).json({eco: texto });
 });

 app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
