const ExamenService = require("../services/ExamenService");

class ExamenController {
  async getAllExamens(req, res) {
    try {
      const examen = await ExamenService.getAllExamens();

      res.json(examen);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Examens" });
    }
  }
  async createExamen(req, res) {
      try {
        const examen = await ExamenService.createExamen(req.body);
        res.status(201).json(examen);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la création du Examen" });
     }
    }
    async getExamenById(req, res) {
      try {
        const examen = await ExamenService.getExamenById(req.params.id);
        if (!examen) {
          return res.status(404).json({ error: "Examen non trouvé" });
        }
        res.json(examen);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la récupération du Examen" });
      }
    }
    async updateExamen(req, res) {
      try {
        const examen = await ExamenService.updateExamen(
          req.params.id,
          req.body
        );
        if (!examen) {
          return res.status(404).json({ error: "Examen non trouvé" });
        }
        res.json(examen);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la mise à jour du Examen" });
      }
    }
    async deleteExamen(req, res) {
      try {
        const examen = await ExamenService.deleteExamen(req.params.id);
        if (!examen) {
          return res.status(404).json({ error: "Examen non trouvé" });
        }
        res.json({ message: "Examen supprimé" });
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la suppression du Examen" });
      }
    }

}
module.exports = new ExamenController();