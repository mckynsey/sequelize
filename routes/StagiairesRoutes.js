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
module.exports = router;