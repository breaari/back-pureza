const { Producto, Categoria, Subcategoria } = require("../../DB_conection");

const getProductosController = async () => {
  try {
    const productos = await Producto.findAll({
      include: [
        {
          model: Categoria,
          attributes: ['id', 'nombre'],
          through: { attributes: [] },
        },
        {
          model: Subcategoria,
          attributes: ['id', 'nombre']
        },
      ]
    });
    return { success: true, productos };
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return { success: false, message: "Error al obtener los productos" };
  }
};

module.exports = {
  getProductosController,
};

