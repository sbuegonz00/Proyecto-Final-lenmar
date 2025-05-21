const db = require("../db/tursoClient");

const CochesModel = {
  async getAll() {
    const result = await db.execute("SELECT * FROM Coches");
    return result.rows;
  },

  async insert(cocheNuevo) {
    await db.execute({
      sql: "INSERT INTO coches (Color, Modelo, Matricula, CV, AnoFabricacion, Descripcion, IDVendedor) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [cocheNuevo.Color, cocheNuevo.Modelo, cocheNuevo.Matricula, cocheNuevo.CV, cocheNuevo.AnoFabricacion, cocheNuevo.Descripcion, cocheNuevo.IDVendedor],
    });
  },

  async update(id, CocheAActualizar) {
    await db.execute({
      sql: "UPDATE Coches SET Descripcion = ? WHERE id = ?",
      args: [CocheAActualizar.Descripcion, id],
    });
  },

  async delete(id) {
    await db.execute({
      sql: "DELETE FROM coches WHERE id = ?",
      args: [id],
    });
  },
};

module.exports = CochesModel;
