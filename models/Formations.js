const { Model, DataTypes } = require('sequelize');
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require('../config/sequelize');
// on importe la config de sequelize
class Formations extends Model {}
// on declare la class stagiaires qui herite de model
Formations.init( 
    // on initialise le model
 {
 id_formation: { 
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
 niveau: {
 type: DataTypes.STRING(255),
 allowNull: false,
 },
 },
 {
 sequelize,
  // on declare la config de sequelize
 modelName: 'Formations',
  // on declare le nom du model
 tableName: 'formation',
  // on declare le nom de la table
 timestamps: false,
  // on declare les timestamps
 }

);
module.exports = Formations;
// on exporte le model stagiaires