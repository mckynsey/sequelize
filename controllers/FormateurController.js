const FormateurService = require("../services/FormateurService");
// on importe le service stagiaire
class FormateurController {
  // on declare la classe stagiaireController
  async getAllFormateurs(req, res) {
    // on declare la fonction getAllStagiaires
    try {
      // on declare le try
      const formateurs = await FormateurService.getAllFormateurs();
      // on declare la const stagiaires qui va recuperer tous les stagiaires
      res.json(formateurs);
      // on renvoie les stagiaires au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
      // on renvoie l'erreur au format json
    }
  }
  async getFormateurById(req, res) {
    // on déclare la fonction getFormateurById
    try {
      // on déclare le try
      const formateur = await FormateurService.getFormateurById(req.params.id);
      // on déclare la const formateur qui va récupérer un formateur par son id
      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
        // on renvoie une erreur 404 si la formateur n'est pas trouvée
      }
      res.json(formateur);
      // on renvoie la formateur au format json
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la récupération de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async addFormateur(req, res) {
    // on déclare la foncteur createStagiaire
    try {
      // on déclare le try
      const formateur = await FormateurService.addFormateur(req.body);
      // on déclare la const stagiaire qui va créer un nouveau stagiaire
      res.status(201).json(formateur);
      // on renvoie le stagiaire créé au format json avec le status 201
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la créateur de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async updateFormateur(req, res) {
    // on declare la fonction updateFormation
    try {
      // on déclare le try
      const formateur = await FormateurService.updateFormateur(
        req.params.id,
        req.body
      );
      // on déclare la const stagiaire qui va mettre à jour un stagiaire par son id
      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
        // on renvoie une erreur 404 si le stagiaire n'est pas trouvé
      }
      res.json(formateur);
      // on renvoie le stagiaire au format json
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la mise à jour de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async deleteFormateur(req, res) {
    // on declare la fonction deleteFormation
    try {
      // on déclare le try
      const formateur = await FormateurService.deleteFormateur(req.params.id);
      // on déclare la const stagiaire qui va supprimer un stagiaire par son id
      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
        // on renvoie une erreur 404 si le stagiaire n'est pas trouvé
      }
      res.json(formateur);
      // on renvoie le stagiaire supprimé au format json
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la suppression de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async getFormateurById(req, res) {
    // on déclare la fonction getFormateurByIdFormation
    try {
      // on déclare le try
      const formateur = await FormateurService.getFormateurById(
        req.params.id
      );
      // on déclare la const stagiaire qui va récupérer un stagiaire par son id
      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
        // on renvoie une erreur 404 si le stagiaire n'est pas trouvé
      }
      res.json(formateur);
      // on renvoie le stagiaire au format json
    } catch (error) {
      // on déclare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on déclare le status 500
      res.json({ error: "Erreur lors de la récupération de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new FormateurController();
// on exporte la classe stagiaireController
