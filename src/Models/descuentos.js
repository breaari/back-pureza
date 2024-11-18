const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Descuento", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montoMinimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    porcentajeDeDescuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // En este caso, es 0 por default
    },
    envioGratis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
