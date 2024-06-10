const { Categoria } = require("../../DB_conection");

const getByIdCategoriaController = async (id) => {
  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      throw new Error('Categoría no encontrada');
    }
    return categoria;
  } catch (error) {
    console.error(`Error al obtener la categoría con ID ${id}:`, error);
    throw new Error('Error al obtener la categoría');
  }
};

module.exports = { getByIdCategoriaController };
