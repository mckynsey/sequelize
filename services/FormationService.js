const Formations = require("../models/Formations");
// on importe le model Formations (correction du nom)
class FormationService {
  async getAllFormations() {
    // Correction du nom de la fonction
    return await Formations.findAll(); // on renvoie toutes les formations
  }
  async addFormation(formation) {
    // on declare la fonctionaddFormation
    return await Formations.create(formation); // onrenvoie la formation
  }
  async getFormationById(id) {
    // on
    return await Formations.findByPk(id); // on renvoie la formation par son id
  }
  async updateFormation(id, formation) {
    // on declare la fonction updateFormation
    return await Formations.update(formation, {
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation mise à jour
  }
  async deleteFormation(id) {
    // on declare la fonction deleteFormation
    return await Formations.destroy({
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation supprimée
  }
}
module.exports = new FormationService();
