const {} = require("sequelize");
const Chiens = require("../models/Chiens");
const Puces = require("../models/Puces");
const Examen = require("../models/Examens");

class ChienService {
  async getAllChiens() {
    return await Chiens.findAll({

      include: [
        {
          model: Puces,
          as: "puces",
        },
        {
          model: Examen,
          as: "examens",
        }
      ],
      
      attributes: ['race', 'age']}); //pour choisir uniquement les collones que je veux ici race et age
  }
  async createChien(data) {
    return await Chiens.create(data); 
  }
  async getChienById(id) {
   
    return await Chiens.findByPk(id); 
  }
  async updateChien(id, data) {
    return await Chiens.update(data, { where: { id_chien: id } }); 
  }
  async deleteChien(id) {
    return await Chiens.destroy({ where: { id_chien: id } }); 
  }
}
module.exports = new ChienService();
