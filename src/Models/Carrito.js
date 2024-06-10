const { DataTypes, UUID } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Carrito", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    productos: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
    }
  });
};
