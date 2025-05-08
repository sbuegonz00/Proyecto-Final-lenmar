const { z } = require("zod");

const CochesSchema = z.object({
  descripcion: z.string().min(1),
  Color: z.string().min(1),
  Modelo: z.string().min(1),
  Matricula: z.string().min(1),
  CV: z.number().min(50),
  AnoFabricacion: z.number().int().gte(1900).lte(new Date().getFullYear()),
});

module.exports = { cochesSchema: CochesSchema };
