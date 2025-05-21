const CochesModel = require("../models/CochesModel");

const CochesController = {
  async getAll(req, res) {
  const coches = await CochesModel.getAll();  
    res.json(coches);
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
