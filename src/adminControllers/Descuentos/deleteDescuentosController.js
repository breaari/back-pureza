const { Descuento } = require("../../DB_conection");

const deleteDescuentoController = async (id) => {
  try {
    // Buscar el descuento por su ID
    const descuento = await Descuento.findByPk(id);
    if (!descuento) {
      return { success: false, message: "Descuento no encontrado" };
    }

    // Eliminar el descuento
    await descuento.destroy();
    return { success: true, message: "Descuento eliminado exitosamente" };
  } catch (error) {
    console.error("Error al eliminar descuento:", error);
    return { success: false, message: "Error al eliminar descuento. Por favor, inténtelo de nuevo más tarde" };
  }
};

module.exports = { deleteDescuentoController };
