const PuceService = require("../services/PuceService");

class PuceController {
  async getAllPuces(req, res) {
    try {
      const puce = await PuceService.getAllPuces();

      res.json(puce);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Puces" });
    }
  }
  async createPuce(req, res) {
      try {
        const puce = await PuceService.createPuce(req.body);
        res.status(201).json(puce);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la création du Puce" });
     }
    }
    async getPuceById(req, res) {
      try {
        const puce = await PuceService.getPuceById(req.params.id);
        if (!puce) {
          return res.status(404).json({ error: "Puce non trouvé" });
        }
        res.json(puce);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la récupération du Puce" });
      }
    }
    async updatePuce(req, res) {
      try {
        const puce = await PuceService.updatePuce(
          req.params.id,
          req.body
        );
        if (!puce) {
          return res.status(404).json({ error: "Puce non trouvé" });
        }
        res.json(puce);
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la mise à jour du Puce" });
      }
    }
    async deletePuce(req, res) {
      try {
        const puce = await PuceService.deletePuce(req.params.id);
        if (!puce) {
          return res.status(404).json({ error: "Puce non trouvé" });
        }
        res.json({ message: "Puce supprimé" });
      } catch (error) {
        console.log(error); 
        res.status(500); 
        res.json({ error: "Erreur lors de la suppression du Puce" });
      }
    }

}
module.exports = new PuceController();