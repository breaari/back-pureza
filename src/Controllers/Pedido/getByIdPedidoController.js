// Controllers/pedidoController.js
const { Pedido } = require("../../DB_conection");

const getByIdPedidoController = async (id) => {
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return { success: false, message: "Pedido no encontrado" };
    }
    return { success: true, pedido: pedido };
  } catch (error) {
    console.error("Error al obtener el pedido:", error);
    return { success: false, message: "Error al obtener el pedido. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { getByIdPedidoController };
