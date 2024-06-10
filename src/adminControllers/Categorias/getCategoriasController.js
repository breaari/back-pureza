const {Categoria} = require("../../DB_conection");

const getCategoriasController = async () => {
  try {
    const categorias = await Categoria.findAll();
    return categorias;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    throw new Error('Error al obtener las categorías');
  }
};

module.exports = { getCategoriasController };
