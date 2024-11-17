const { Descuento } = require("../../DB_conection");

const agregarDescuentoController = async ({ contenido, valor, porcentajeDeDescuento, envioGratis }) => {
  try {
    // Crear el descuento
    const nuevoDescuento = await Descuento.create({ contenido, valor, porcentajeDeDescuento, envioGratis });
    return { success: true, descuento: nuevoDescuento };
  } catch (error) {
    console.error('Error al crear el descuento:', error);
    return { success: false, message: `Error al crear el descuento: ${error.message}` };
  }
};

module.exports = { agregarDescuentoController };
