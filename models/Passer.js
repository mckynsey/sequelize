const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Chien = require("./Chiens");
const Examen = require("./Examens");

class Passer extends Model {}

Passer.init(
  {
    id_Examen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Examen,
        key: "id_examen",
      },
    },
    id_chien: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Chien,
        key: "id_chien",
      },
    },
  },
  {
    sequelize,
    tableName: "passer",
    timestamps: false,
  }
);

module.exports = Passer;