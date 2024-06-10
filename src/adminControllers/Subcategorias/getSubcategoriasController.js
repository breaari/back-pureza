const { Subcategoria } = require("../../DB_conection");

const getSubcategoriasController = async () => {
  try {
    // Obtener todas las subcategorías
    const subcategorias = await Subcategoria.findAll();
    return subcategorias;
  } catch (error) {
    throw new Error(`Error al obtener las subcategorías: ${error.message}`);
  }
};

module.exports = { getSubcategoriasController };
