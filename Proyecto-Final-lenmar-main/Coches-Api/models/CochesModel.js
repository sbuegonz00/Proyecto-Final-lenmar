const db = require("../db/tursoClient");

const CochesModel = {
async getAll() {
  try {
    const result = await db.execute("SELECT * FROM coches");

    if (result.rows && result.columns) {
      const coches = result.rows.map(row => {
        const obj = {};
        result.columns.forEach((col, i) => {
          obj[col] = row[i];
        });
        return obj;
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
