const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const FormateurController = require('../controllers/FormateurController');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
 FormateurController.getAllFormateurs(req, res); // on declare la fonction getAllformations
});
router.post("/", (req, res) => {
  FormateurController.addFormateur(req, res);
});
router.get("/:id", (req, res) => {
  FormateurController.getFormateurById(req, res);
});
router.put("/:id", (req, res) => {
  FormateurController.updateFormateur(req, res);
 });
 router.delete("/:id", (req, res) => {
  FormateurController.deleteFormateur(req, res);
 });



module.exports = router;