const { Pedido } = require("../../DB_conection");

const deletePedidoController = async (id) => {
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return { success: false, message: "Pedido no encontrado" };
    }
    await pedido.destroy();
    return { success: true, message: "Pedido eliminado correctamente" };
  } catch (error) {
    console.error("Error al eliminar el pedido:", error);
    return { success: false, message: "Error al eliminar el pedido. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { deletePedidoController };
