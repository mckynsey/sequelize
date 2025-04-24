const Formateurs = require("../models/Formateurs");
// on importe le model Formations (correction du nom)
class FormateurService {
  async getAllFormateurs() {
    // Correction du nom de la fonction
    return await Formateurs.findAll(); // on renvoie toutes les formations
  }
  async addFormateur(formateur) {
    return await Formateurs.create(formateur);
  }
  async getFormateurById(id) {
    return await Formateurs.findByPk(id);
  }
  async updateFormateur(id, formateur) {
    // on declare la fonction updateFormation
    return await Formateurs.update(formateur, {
      where: {
        id_formateur: id,
      },
    }); // on renvoie la formation mise à jour
  }
  async deleteFormateur(id) {
    // on declare la fonction deleteFormation
    return await Formateurs.destroy({
      where: {
        id_formateur: id,
      },
    }); // on renvoie la formation supprimée
  }
}
module.exports = new FormateurService();
