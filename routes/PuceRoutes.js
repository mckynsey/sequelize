const express = require('express');
const router = express.Router();
const PuceController = require('../controllers/PucesController');
router.get("/", (req, res) => { 
 PuceController.getAllPuces(req, res); 
});
router.post("/", (req, res) => {
  PuceController.createPuce(req, res);
});
router.get("/:id", (req, res) => {
  PuceController.getPuceById(req, res);
});
router.put("/:id", (req, res) => {
  PuceController.updatePuce(req, res);
 });
 router.delete("/:id", (req, res) => {
  PuceController.deletePuce(req, res);
 });


module.exports = router;