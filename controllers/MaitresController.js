const MaitreService = require("../services/MaitreService");
class MaitreController {
  async getAllMaitres(req, res) {
    try {
      const Maitres = await MaitreService.getAllMaitres();
      res.json(Maitres);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des Maitres" });
    }
  }
  async createMaitre(req, res) {
    try {
      const Maitre = await MaitreService.createMaitre(req.body);
      res.status(201).json(Maitre);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la création du Maitre" });
   }
  }
  async getMaitreById(req, res) {
    try {
      const Maitre = await MaitreService.getMaitreById(req.params.id);
      if (!Maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.json(Maitre);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération du Maitre" });
    }
  }
  async updateMaitre(req, res) {
    try {
      const Maitre = await MaitreService.updateMaitre(
        req.params.id,
        req.body
      );
      if (!Maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.json(Maitre);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour du Maitre" });
    }
  }
  async deleteMaitre(req, res) {
    try {
      const Maitre = await MaitreService.deleteMaitre(req.params.id);
      if (!Maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.json({ message: "Maitre supprimé" });
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression du Maitre" });
    }
  }
}
module.exports = new MaitreController();
