const {} = require("sequelize");
const Maitres = require("../models/Maitres");
const Chiens = require("../models/Chiens");

class MaitreService {
  async getAllMaitres() {
    return await Maitres.findAll({ include: [
      {
        model: Chiens,
        as: "chiens",
      },
    ],}); 
  }
  async createMaitre(data) {
    return await Maitres.create(data); 
  }
  async getMaitreById(id, ) {
   
    return await Maitres.findByPk(id, { include: [
      {
        model: Chiens,
        as: "chiens",
      },
    ],
    attributes: ['nom']
  }); 
  }
  async updateMaitre(id, data) {
    return await Maitres.update(data, { where: { id_maitre: id } }); 
  }
  async deleteMaitre(id) {
    return await Maitres.destroy({ where: { id_maitre: id } }); 
  }
}
module.exports = new MaitreService();
