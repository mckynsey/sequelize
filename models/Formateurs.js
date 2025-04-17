const { Model, DataTypes } = require('sequelize');
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require('../config/sequelize');
// on importe la config de sequelize
class Formateurs extends Model {}
// on declare la class Formateurs qui herite de model
Formateurs.init( 
    // on initialise le model
 {
 id_formateur: { 
    // on declare les champs de la table
 type: DataTypes.INTEGER,
 // on declare le type dedonnées
 primaryKey: true,
  // on declare la clé primaire
 autoIncrement: true, 
 // on declare l'autoincrement
 allowNull: false,
  // on declare le champ comme non nul
 },
 nom: {
 type: DataTypes.STRING(255),
 allowNull: false,
 },
 prenom: {
 type: DataTypes.STRING(255),
 allowNull: false,
 },
 age : {
 type: DataTypes.INTEGER,
 allowNull: false,
 },
 },
 {
 sequelize,
  // on declare la config de sequelize
 modelName: 'Formateurs',
  // on declare le nom du model
 tableName: 'formateur',
  // on declare le nom de la table
 timestamps: false,
  // on declare les timestamps
 }

);
module.exports = Formateurs ;
// on exporte le model stagiaires