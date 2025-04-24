const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Chiens = require("./Chiens"); 
class Maitres extends Model {}
Maitres.init(
  {
    id_maitre: {
      type: DataTypes.INTEGER,
      model: Maitres,
      key: "id_maitre",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    
  },
  {
    sequelize,
    modelName: "Maitres",
    tableName: "Maitre",
    timestamps: false,
  }
);
module.exports = Maitres;
