// const Sequelize = require('sequelize');
// // on declare une constante Sequelize qui est le moduleSequelize
// const config = require('../Config/config.json');
// // on declare une constante config qui est le fichier deconfiguration config.json
// const sequelize = new Sequelize( // on instancie Sequelize
//  config.database, // nom de la base de données
//  config.username, // nom d'utilisateur
//  config.password, // mot de passe
//  {
//  host: config.host, // hôte de la base de données
//  dialect: "mysql", // dialecte de la base de données
//  port: config.port, // port de la base de données
//  }
// );
// module.exports = sequelize;
// // on exporte la constante sequelize pour l'utiliser dans d'autres fichiers
const { Sequelize } = require("sequelize");
require("dotenv").config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;