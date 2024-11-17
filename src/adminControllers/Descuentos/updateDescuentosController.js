const { Descuento } = require("../../DB_conection");

const updateDescuentoController = async (id, updateData) => {
  try {
    // Buscar el descuento por su ID
    const descuento = await Descuento.findByPk(id);

    if (!descuento) {
      return { success: false, message: "Descuento no encontrado" };
    }

    // Actualizar la información del descuento
    await descuento.update(updateData);

    return { success: true, descuento };
  } catch (error) {
    console.error("Error al actualizar descuento:", error);
    return { success: false, message: "Error al actualizar descuento. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { updateDescuentoController };
