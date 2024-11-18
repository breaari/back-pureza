const { Descuento } = require("../../DB_conection");

const agregarDescuentoController = async ({ contenido, montoMinimo, porcentajeDescuento, envioGratis }) => {
  try {
    // Crear el descuento en la base de datos
    const nuevoDescuento = await Descuento.create({
      contenido,
      montoMinimo,          // Cambiado de 'valor' a 'montoMinimo'
      porcentajeDeDescuento: porcentajeDescuento, // Usar el nombre correcto del campo
      envioGratis
    });

    return { success: true, descuento: nuevoDescuento };
  } catch (error) {
    console.error('Error al crear el descuento:', error);
    return { success: false, message: `Error al crear el descuento: ${error.message}` };
  }
};

module.exports = { agregarDescuentoController };
