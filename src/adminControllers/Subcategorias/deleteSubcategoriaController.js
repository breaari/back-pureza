const { Subcategoria } = require("../../DB_conection");

const deleteSubcategoriaController = async (id) => {
  try {
    const subcategoria = await Subcategoria.findByPk(id);
    if (!subcategoria) {
      throw new Error(`Subcategoría con ID ${id} no encontrada`);
    }
    await subcategoria.destroy();
    return { message: `Subcategoría con ID ${id} eliminada correctamente` };
  } catch (error) {
    throw new Error(`Error al eliminar la subcategoría: ${error.message}`);
  }
};

module.exports = { deleteSubcategoriaController };
