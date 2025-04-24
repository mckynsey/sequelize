const {} = require("sequelize");
const Examens = require("../models/Examens");
const  Chien  = require("../models/Chiens");

class ExamenService {
  async getAllExamens() {
    return await Examens.findAll({include: [
        {
            model: Chien,
            as: "chiens",
        },
    ]}
        
    );
  }
  async createExamen(data) {
    return await Examens.create(data); 
  }
  async getExamenById(id) {
   
    return await Examens.findByPk(id); 
  }
  async updateExamen(id, data) {
    return await Examens.update(data, { where: { id_Examen: id } }); 
  }
  async deleteExamen(id) {
    return await Examens.destroy({ where: { id_Examen: id } }); 
  }
}
module.exports = new ExamenService();
