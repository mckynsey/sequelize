const StagiaireService =
require('../services/StagiaireService');
// on importe le service stagiaire
class StagiaireController {
// on declare la classe stagiaireController
 async getAllStagiaires(req, res) { // on declare la fonction getAllStagiaires
 try { // on declare le try
 const stagiaires = await
StagiaireService.getAllStagiaires();
 // on declare la const stagiaires qui va recuperer tous les stagiaires
 res.json(stagiaires);
 // on renvoie les stagiaires au format json
 } catch (error) { // on declare le catch
 console.log(error); // on affiche l'erreur dans la
console
 res.status(500); // on declare le status 500
 res.json({ error: 'Erreur lors de la récupération des stagiaires' });
 // on renvoie l'erreur au format json
 }
 }
async createStagiaire(req, res) { // on déclare la fonction createStagiaire
    try { // on déclare le try
        const stagiaire = await StagiaireService.createStagiaire(req.body);
        // on déclare la const stagiaire qui va créer un nouveau stagiaire
        res.status(201).json(stagiaire);
        // on renvoie le stagiaire créé au format json avec le status 201
    } catch (error) { // on déclare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on déclare le status 500
        res.json({ error: 'Erreur lors de la création du stagiaire' });
        // on renvoie l'erreur au format json
    }
}
}
module.exports = new StagiaireController();
// on exporte la classe stagiaireController