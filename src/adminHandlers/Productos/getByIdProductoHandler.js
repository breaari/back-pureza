const { getByIdProductoController } = require("../../adminControllers/Productos/getByIdProductosController");

const getByIdProductoHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID de producto es requerido" });
  }

  const response = await getByIdProductoController(id);

  if (!response.success) {
    return res.status(404).json({ success: false, message: response.message });
  }

  return res.status(200).json({ success: true, producto: response.producto });
};

module.exports = {
  getByIdProductoHandler,
};
