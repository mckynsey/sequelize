const ChienService = require("../services/ChienService");
class ChienController {
    
  async getAllChiens(req, res) {
    try {
      const chiens = await ChienService.getAllChiens();
      res.json(chiens);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des Chiens" });
    }
  }
  async createChien(req, res) {
    try {
      const chien = await ChienService.createChien(req.body);
      res.status(201).json(chien);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la création du Chien" });
   }
  }
  async getChienById(req, res) {
    try {
      const chien = await ChienService.getChienById(req.params.id);
      if (!chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.json(chien);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération du Chien" });
    }
  }
  async updateChien(req, res) {
    try {
      const chien = await ChienService.updateChien(
        req.params.id,
        req.body
      );
      if (!chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.json(chien);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour du Chien" });
    }
  }
  async deleteChien(req, res) {
    try {
      const chien = await ChienService.deleteChien(req.params.id);
      if (!chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.json({ message: "Chien supprimé" });
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression du Chien" });
    }
  }
}
module.exports = new ChienController();
