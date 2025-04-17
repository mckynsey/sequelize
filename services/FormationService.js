const Formations = require('../models/Formations');
// on importe le model Formations (correction du nom)
class FormationService {
 async getAllFormations() { // Correction du nom de la fonction
 return await Formations.findAll(); // on renvoie toutes les formations
 }
}
module.exports = new FormationService();