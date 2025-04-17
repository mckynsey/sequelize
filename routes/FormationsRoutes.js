const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const StagiaireController =
require('../controllers/FormationsController');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
 StagiaireController.getAllFormations(req, res); // on declare la fonction getAllformations
});
module.exports = router;