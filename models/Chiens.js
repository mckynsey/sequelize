const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Maitres = require("./Maitres");

class Chiens extends Model {}

Chiens.init(
  {
    id_chien: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_maitre: {
      type: DataTypes.INTEGER,
      references: {
        model: Maitres,
        key: "id_maitre",
      },
    },
  },
  { 
    sequelize,
    modelName: "Chiens",
    tableName: "Chien",
    timestamps: false,
  }
);

module.exports = Chiens;