const { Categoria } = require("../../DB_conection");

const deleteCategoriaController = async (id) => {
  try {
    // Buscar la categoría por ID
    const categoria = await Categoria.findByPk(id);

    // Verificar si la categoría existe
    if (!categoria) {
      throw new Error(`Categoría con ID ${id} no encontrada`);
    }

    // Eliminar la categoría
    await categoria.destroy();

    return { message: `Categoría con ID ${id} eliminada correctamente` };
  } catch (error) {
    throw new Error(`Error al eliminar la categoría: ${error}`);
  }
};

module.exports = { deleteCategoriaController };
