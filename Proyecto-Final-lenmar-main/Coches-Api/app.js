const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const Coches = require("./routes/CochesRoutes");

const app = express();

app.use(express.json());

// Servir archivos estáticos (CSS, JS, imágenes) desde 'fronted'
app.use(express.static(path.join(__dirname, "fronted")));

// Tus rutas API
app.use("/api", Coches);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fronted/html/index.html"));
});



