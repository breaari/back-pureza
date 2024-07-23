const { Pedido } = require("../../DB_conection");

const crearPedidoController = async (pedidoData) => {

  try {
    // Obtener la fecha y la hora actual
    const fechaActual = new Date();
    const horaActual = fechaActual.toTimeString().split(' ')[0]; // Obtener solo la hora en formato HH:MM:SS

    // Crear el pedido
    const pedido = await Pedido.create({
      fecha: fechaActual, // Fecha actual
      hora: horaActual, // Hora actual
      estado: pedidoData.estado,
      pedido: pedidoData.pedido, // Estructura del pedido [{ productId: "24001", cantidad: 2 }]
      userId: pedidoData.userId, // ID del usuario que realiza el pedido
      total: pedidoData.total
    });

    return { success: true, pedido: pedido };
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    return { success: false, message: "Error al crear el pedido. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { crearPedidoController };


