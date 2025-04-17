const { } = require("sequelize");
const Stagiaires = require("../models/Stagiaires");
// on importe sequelize

// on importe le model stagiaires
class StagiaireService {
 async getAllStagiaires() { // on declare la fonction getAllStagiaires
 return await Stagiaires.findAll(); // on renvoie tous les stagiaires
 }
 async createStagiaire(data) { // on déclare la fonction createStagiaire
    return await Stagiaires.create(data); // on crée un nouveau stagiaire avec les données fournies
}
}
module.exports = new StagiaireService();
// on exporte le service stagiaire


