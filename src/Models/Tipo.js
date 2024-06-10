const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Tipo", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
