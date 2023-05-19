const express = require('express');
const app = express()

// console.log(express.raw.PORT);
const PORT = process.env.PORT || 8083

app.get('/productosAlimenticios', (req, res) => {
    res.json({mensaje: "Servidor contestando a petición GET a la ruta de productosAlimenticios (Rogelio Zamarripa Treviño - 18100248)"});
});

app.post('/proveedorProducto', (req, res) => {
    res.json({mensaje: "Servidor contestando a petición POST a la ruta de proveedorProducto (Rogelio Zamarripa Treviño - 18100248)"});
});

app.listen(PORT, ()=>
{
    console.log(`Servidor Express corriendo y escuchando en el puerto ${PORT}`)
})