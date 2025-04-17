const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const FormationController = require("../controllers/FormationsController");
const FormationsController = require("../controllers/FormationsController");
// on importe le controller stagiaire
router.get("/", (req, res) => {
  // on declare la route get
  FormationsController.getAllFormations(req, res); // on declare la fonction getAllformations
});
router.post("/", (req, res) => {
  FormationController.addFormation(req, res);
});
router.get("/:id", (req, res) => {
  FormationController.getFormationById(req, res);
});

module.exports = router;
