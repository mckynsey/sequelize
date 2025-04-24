const {} = require("sequelize");
const Stagiaires = require("../models/Stagiaires");
// on importe sequelize

// on importe le model stagiaires
class StagiaireService {
  async getAllStagiaires() {
    // on declare la fonction getAllStagiaires
    return await Stagiaires.findAll(); // on renvoie tous les stagiaires
  }
  async createStagiaire(data) {
    // on déclare la fonction createStagiaire
    return await Stagiaires.create(data); // on crée un nouveau stagiaire avec les données fournies
  }
  async getStagiaireById(id) {
    // on
    return await Stagiaires.findByPk(id); // on renvoie le stagiaire par son id
  }
  async updateStagiaire(id, data) {
    // on declare la fonction updateStagiaire
    return await Stagiaires.update(data, { where: { id_stagiaire: id } }); // on renvoie le stagiaire mis à jour
  }
  async deleteStagiaire(id) {
    // on declare la fonction deleteStagiaire
    return await Stagiaires.destroy({ where: { id_stagiaire: id } }); // on renvoie le stagiaire supprimé
  }
}
module.exports = new StagiaireService();
// on exporte le service stagiaire
