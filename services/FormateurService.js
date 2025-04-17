const Formateurs = require('../models/Formateurs');
// on importe le model Formations (correction du nom)
class FormateurService {
 async getAllFormateurs() { // Correction du nom de la fonction
 return await Formateurs.findAll(); // on renvoie toutes les formations
 }
}
module.exports = new FormateurService();