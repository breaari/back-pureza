const { getDescuentosController } = require("../../adminControllers/Descuentos/getDescuentosController");

const getDescuentosHandler = async (req, res) => {
  try {       
    const result = await getDescuentosController();
    if (result.success) {
      res.status(200).json({ success: true, descuentos: result.descuentos });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador obtenerDescuentosHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { getDescuentosHandler };
