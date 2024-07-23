const { DataTypes, UUID } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Pedido", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pedido: {
      type: DataTypes.JSON,
      allowNull: false,

    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false, // ID del usuario que realiza el pedido
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,

    },

  });
};
