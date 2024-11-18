const { deleteDescuentoController } = require("../../adminControllers/Descuentos/deleteDescuentosController");

const deleteDescuentoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteDescuentoController(id);
    if (result.success) {
      res.status(200).json({ success: true, message: result.message });
    } else {
      res.status(404).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador deleteDescuentoHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { deleteDescuentoHandler };

