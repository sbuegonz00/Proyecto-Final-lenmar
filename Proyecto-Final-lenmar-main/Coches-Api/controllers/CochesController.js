const CochesModel = require("../models/CochesModel");

const CochesController = {
  async getAll() {
  try {
    const result = await db.execute("SELECT * FROM coches");

    if (result.rows && result.columns) {
      // Transformar cada fila (array) en objeto con keys según columnas
      const coches = result.rows.map(row => {
        const cocheObj = {};
        result.columns.forEach((colName, i) => {
          cocheObj[colName] = row[i];
        });
        return cocheObj;
      });
      return coches;
    }

    if (Array.isArray(result)) return result;
    return [];

  } catch (error) {
    console.error("Error en getAll:", error);
    throw error;
  }
},

  async insert(req, res) {
    try {
      await CochesModel.insert(req.body);
      res.status(201).json({ message: "Coche añadido" });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      await CochesModel.update(id, req.body);
      res.json({ message: "Coche actualizado" });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    await CochesModel.delete(id);
    res.json({ message: "Coche eliminado" });
  },
};

module.exports = CochesController;
