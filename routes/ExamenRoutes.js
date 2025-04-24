const express = require('express');
const router = express.Router();
const ExamenController = require('../controllers/ExamensController');
router.get("/", (req, res) => { 
 ExamenController.getAllExamens(req, res); 
});
router.post("/", (req, res) => {
  ExamenController.createExamen(req, res);
});
router.get("/:id", (req, res) => {
  ExamenController.getExamenById(req, res);
});
router.put("/:id", (req, res) => {
  ExamenController.updateExamen(req, res);
 });
 router.delete("/:id", (req, res) => {
  ExamenController.deleteExamen(req, res);
 });


module.exports = router;