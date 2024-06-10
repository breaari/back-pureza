const { Carrito } = require("../../DB_conection");

const deleteCarritoController = async (carritoId) => {
  try {
    // Buscar el carrito por su ID
    const carrito = await Carrito.findByPk(carritoId);

    if (!carrito) {
      return { success: false, message: "Carrito no encontrado" };
    }

    // Eliminar el carrito
    await carrito.destroy();

    return { success: true, message: "Carrito eliminado correctamente" };
  } catch (error) {
    console.error("Error al eliminar el carrito:", error);
    return { success: false, message: "Error al eliminar el carrito. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { deleteCarritoController };
