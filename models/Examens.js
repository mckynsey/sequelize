const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Examen extends Model {}
Examen.init(
  {
    id_examen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_exam: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "examen",
    timestamps: false,
  }
);
module.exports = Examen;