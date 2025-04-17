const Formations = require('../models/Formations');
// on importe le model Formations (correction du nom)
class FormationService {
 async getAllFormations() { // Correction du nom de la fonction
 return await Formations.findAll(); // on renvoie toutes les formations
 }
 async addFormation(formation) { // on declare la fonctionaddFormation
     return await Formations.create(formation); // onrenvoie la formation
}
 async getFormationById(id) { // on
     return await Formations.findByPk(id); // on renvoie la formation par son id
 }
}
module.exports = new FormationService();