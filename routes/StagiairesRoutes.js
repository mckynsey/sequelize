const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const StagiaireController =
require('../controllers/StagiairesController');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
 StagiaireController.getAllStagiaires(req, res); // on declare la fonction getAllStagiaires
});
router.post("/", (req, res) => { // on declare la route post
    StagiaireController.createStagiaire(req, res); // on declare la fonction createStagiaire
});
router.get("/:id", (req, res) => { // on declare la route get
    StagiaireController.getStagiaireById(req, res); // on declare la fonction getStagiaireById
});
router.put("/:id", (req, res) => { // on declare la route put
    StagiaireController.updateStagiaire(req, res); // on declare la fonction updateStagiaire
});
router.delete("/:id", (req, res) => { // on declare la route delete
    StagiaireController.deleteStagiaire(req, res); // on declare la fonction deleteStagiaire
});
module.exports = router;