const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const Coches = require("./routes/CochesRoutes");

const app = express();
app.use(express.json());

app.use("/api", Coches);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});