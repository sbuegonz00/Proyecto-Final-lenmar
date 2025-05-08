const CochesModel = require("../../models/cochesModel");
const { movieSchema: CochesSchema } = require("../validations/cochesValidation");

const CochesController = {
  async getAll(req, res) {
  const coches = await CochesModel.getAll();  
    res.json(coches);
  },

  async insert(req, res) {
    try {
      const validated = CochesSchema.parse(req.body);
      await CochesModel.insert(validated);
      res.status(201).json({ message: "Coche añadido" });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  },

  async update(req, res) {
    try {
      const validated = CochesSchema.parse(req.body);
      const id = req.params.id;
      await CochesModel.update(id, validated);
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
