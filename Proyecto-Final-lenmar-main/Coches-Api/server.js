const express = require('express');
const path = require('path');
const app = express();
const frontedPath = path.resolve(__dirname, '../fronted');
const CochesModel = require('./models/CochesModel');

// Servir carpeta 'fronted' como archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(frontedPath)));


// Middleware para parsear JSON (si tienes API POST)
app.use(express.json());

// Ejemplo ruta API para coches (ajusta según tu lógica y DB)

app.get('/api/coches', async (req, res) => {
  try {
    const coches = await CochesModel.getAll();
    console.log("Coches enviados:", coches);
    res.json(coches);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener coches" });
  }
});



// Si quieres que la ruta raíz sirva el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(frontedPath, '/html/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
