const { Carrito } = require("../../DB_conection");

const getByIdCarritoController = async (carritoId) => {
  try {
    const carrito = await Carrito.findOne({
      where: { id: carritoId }
    });

    if (!carrito) {
      return { success: false, message: "Carrito no encontrado" };
    }

    return { success: true, carrito: carrito };
  } catch (error) {
    return { success: false, message: "Error al obtener el carrito. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { getByIdCarritoController };
