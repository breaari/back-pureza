const { DataTypes, UUID } = require("sequelize");

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
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    porcentajeDeDescuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    envioGratis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
