const { Producto, Categoria, Subcategoria } = require("../../DB_conection");

const getByIdProductoController = async (id) => {
  try {
    const producto = await Producto.findByPk(id, {
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

    if (!producto) {
      return { success: false, message: "Producto no encontrado" };
    }

    return { success: true, producto };
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    return { success: false, message: "Error al obtener el producto" };
  }
};

module.exports = {
  getByIdProductoController,
};
