const {Categoria} = require("../DB_conection");

const agregarCategoriaController = async ({ nombre }) => {
  try {
    // Crear la categoría
    const nuevaCategoria = await Categoria.create({ nombre });

    return nuevaCategoria;
  } catch (error) {
    throw new Error(`Error al crear la categoría: ${error}`);
  }
};

module.exports = { agregarCategoriaController };
