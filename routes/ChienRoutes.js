const express = require('express');
const router = express.Router();
const ChienController = require('../controllers/ChiensController');
router.get("/", (req, res) => { 
 ChienController.getAllChiens(req, res); 
});
router.post("/", (req, res) => {
  ChienController.addChien(req, res);
});
router.get("/:id", (req, res) => {
  ChienController.getChienById(req, res);
});
router.put("/:id", (req, res) => {
  ChienController.updateChien(req, res);
 });
 router.delete("/:id", (req, res) => {
  ChienController.deleteChien(req, res);
 });


module.exports = router;