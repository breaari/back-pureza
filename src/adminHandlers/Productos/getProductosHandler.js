const { getProductosController } = require("../../adminControllers/Productos/getProductosController");

const getProductosHandler = async (req, res) => {
  try {
    const result = await getProductosController();
    if (result.success) {
      res.status(200).json({ success: true, productos: result.productos });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el manejador obtenerProductosHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { getProductosHandler };
