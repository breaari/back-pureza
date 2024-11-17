const { getByIdDescuentoController } = require("../../adminControllers/Descuentos/getByIdDescuentosController");

const getByIdDescuentoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getByIdDescuentoController(id);
    if (result.success) {
      res.status(200).json({ success: true, descuento: result.descuento });
    } else {
      res.status(404).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador getByIdDescuentoHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { getByIdDescuentoHandler };
