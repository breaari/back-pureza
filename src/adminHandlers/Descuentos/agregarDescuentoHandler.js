const { agregarDescuentoController } = require("../../adminControllers/Descuentos/agregarDescuentosController");

const agregarDescuentoHandler = async (req, res) => {
  const { contenido, montoMinimo, porcentajeDescuento, envioGratis } = req.body;  // Cambio de 'valor' a 'montoMinimo'

  try {
    const result = await agregarDescuentoController({ contenido, montoMinimo, porcentajeDescuento, envioGratis }); // Cambiado 'valor' a 'montoMinimo'
    
    if (result.success) {
      res.status(201).json({ success: true, descuento: result.descuento });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador agregarDescuentoHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { agregarDescuentoHandler };
