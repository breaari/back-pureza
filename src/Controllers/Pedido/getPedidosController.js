const { Pedido } = require("../../DB_conection");

const getPedidosController = async () => {
  try {
    const pedidos = await Pedido.findAll();
    return { success: true, pedidos: pedidos };
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    return { success: false, message: "Error al obtener los pedidos. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { getPedidosController };
