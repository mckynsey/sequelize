const express = require('express');
const router = express.Router();
const MaitreController = require('../controllers/MaitresController');
router.get("/", (req, res) => { // on declare la route get
 MaitreController.getAllMaitres(req, res); // on declare la fonction getAllformations
});
router.post("/", (req, res) => {
  MaitreController.addMaitre(req, res);
});
router.get("/:id", (req, res) => {
  MaitreController.getMaitreById(req, res);
});
router.put("/:id", (req, res) => {
  MaitreController.updateMaitre(req, res);
 });
 router.delete("/:id", (req, res) => {
  MaitreController.deleteMaitre(req, res);
 });


module.exports = router;