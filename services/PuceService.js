const {} = require("sequelize");
const Puces = require("../models/Puces");

class PuceService {
  async getAllPuces() {
    return await Puces.findAll();
  }
  async createPuce(data) {
    return await Puces.create(data); 
  }
  async getPuceById(id) {
   
    return await Puces.findByPk(id); 
  }
  async updatePuce(id, data) {
    return await Puces.update(data, { where: { id_puce: id } }); 
  }
  async deletePuce(id) {
    return await Puces.destroy({ where: { id_puce: id } }); 
  }
}
module.exports = new PuceService();
