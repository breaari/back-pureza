const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Subcategoria", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Categoria',
        key: 'id',
      }
    }
  }, {
    tableName: 'categorias' // Aquí especifica el nombre de la tabla en la base de datos
  });
};

