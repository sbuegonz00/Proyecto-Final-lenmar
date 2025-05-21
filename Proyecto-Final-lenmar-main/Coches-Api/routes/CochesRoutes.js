const express = require("express");
const router = express.Router();
const CochesController = require("../controllers/CochesController");

router.get("/Coches", CochesController.getAll);
router.post("/Coches", CochesController.insert);
router.put("/Coches/:id", CochesController.update);
router.delete("/Coches/:id", CochesController.delete);

module.exports = router;
