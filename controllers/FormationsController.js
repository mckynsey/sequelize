const FormationService = require("../services/FormationService");
// on importe le service stagiaire
class FormationController {
  // on declare la classe FormaController
  async getAllFormations(req, res) {
    // on declare la fonction getAllStagiaires
    try {
      // on declare le try
      const formations = await FormationService.getAllFormations();
      // on declare la const stagiaires qui va recuperer tous les stagiaires
      res.json(formations);
      // on renvoie les stagiaires au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des formations" });
      // on renvoie l'erreur au format json
    }
  }
  async addFormation(req, res) {
    // on déclare la fonction createStagiaire
    try {
      // on déclare le try
      const formation = await FormationService.addFormation(req.body);
      // on déclare la const stagiaire qui va créer un nouveau stagiaire
      res.status(201).json(formation);
      // on renvoie le stagiaire créé au format json avec le status 201
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la création de la formation" });
      // on renvoie l'erreur au format json
    }
  }
    async getFormationById(req, res) {
        // on déclare la fonction getFormationById
        try {
        // on déclare le try
        const formation = await FormationService.getFormationById(req.params.id);
        // on déclare la const formation qui va récupérer un formation par son id
        if (!formation) {
            return res.status(404).json({ error: "Formation non trouvée" });
            // on renvoie une erreur 404 si la formation n'est pas trouvée
        }
        res.json(formation);
        // on renvoie la formation au format json
        } catch (error) {
        // on déclare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on déclare le status 500
        res.json({ error: "Erreur lors de la récupération de la formation" });
        // on renvoie l'erreur au format json
        }
    }
}
module.exports = new FormationController();
// on exporte la classe formationController
