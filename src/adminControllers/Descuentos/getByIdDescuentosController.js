const { Descuento } = require("../../DB_conection");

const getByIdDescuentoController = async (id) => {
  try {
    const descuento = await Descuento.findByPk(id);

    if (!descuento) {
      return { success: false, message: "Descuento no encontrado" };
    }

    return { success: true, descuento };
  } catch (error) {
    console.error('Error al obtener el descuento por ID:', error);
    return { success: false, message: "Error al obtener el descuento" };
  }
};

module.exports = {
  getByIdDescuentoController,
};
