const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Usuario", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("administrador", "usuario_comun"),
      allowNull: false,
      defaultValue: "usuario_comun" 
    }
  });
};
