const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Producto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 1000],
        },
    },
    variantes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precioventa: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    preciocompra: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    preciopromo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
   
    stock: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: { infinito: false, limitado: null }, 
    },
    imagen: {
      type: DataTypes.TEXT, 
      allowNull: true
    },
    categoriaId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    subcategoriaId: {
      type: DataTypes.UUID,
      allowNull: true,
    }
  }, );
};