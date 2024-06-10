const { Pedido } = require("../../DB_conection");

const crearPedidoController = async (pedidoData) => {

  console.log("pedidoDAta:", pedidoData)
  try {
    // Obtener la fecha y la hora actual
    const fechaActual = new Date();
    const horaActual = fechaActual.toTimeString().split(' ')[0]; // Obtener solo la hora en formato HH:MM:SS

    // Validar los campos según el tipo de envío
    if (pedidoData.metodo_envio === 'envio gratis') {
      if (!pedidoData.direccion_entrega || !pedidoData.tipo_direccion || !pedidoData.indicaciones_entrega) {
        return { success: false, message: "Para envío gratis, la dirección, tipo de dirección e indicaciones de entrega son obligatorias." };
      }
    } else if (pedidoData.metodo_envio === 'por correo') {
      if (!pedidoData.empresa_transporte || !pedidoData.sucursal_o_domicilio || !pedidoData.direccion_entrega) {
        return { success: false, message: "Para envío por correo, la empresa de transporte, sucursal o a domicilio y dirección son obligatorias." };
      }
    } else {
      return { success: false, message: "Método de envío no válido." };
    }

    // Crear el pedido
    const pedido = await Pedido.create({
      fecha: fechaActual, // Fecha actual
      hora: horaActual, // Hora actual
      estado: pedidoData.estado,
      direccion_entrega: pedidoData.direccion_entrega,
      metodo_envio: pedidoData.metodo_envio,
      pedido: pedidoData.pedido, // Estructura del pedido [{ productId: "24001", cantidad: 2 }]
      numero_contacto: pedidoData.numero_contacto,
      link_seguimiento: pedidoData.link_seguimiento || null,
      id_pago: pedidoData.id_pago || null,
      tipo_direccion: pedidoData.tipo_direccion || null,
      indicaciones_entrega: pedidoData.indicaciones_entrega || null,
      empresa_transporte: pedidoData.empresa_transporte || null, // Empresa de transporte para envío por correo
      sucursal_o_domicilio: pedidoData.sucursal_o_domicilio || null, // Sucursal o a domicilio para envío por correo
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


