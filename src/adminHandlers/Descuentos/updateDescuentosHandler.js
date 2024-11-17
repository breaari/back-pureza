const { updateDescuentoController } = require("../../adminControllers/Descuentos/updateDescuentosController");

const updateDescuentoHandler = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const result = await updateDescuentoController(id, updateData);
    if (result.success) {
      res.status(200).json({ success: true, descuento: result.descuento });
    } else {
      res.status(404).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador updateDescuentoHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { updateDescuentoHandler };
