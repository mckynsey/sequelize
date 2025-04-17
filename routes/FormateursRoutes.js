const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const FormateurController = require('../controllers/FormateurController');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
 FormateurController.getAllFormateurs(req, res); // on declare la fonction getAllformations
});
module.exports = router;