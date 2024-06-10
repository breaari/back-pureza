const { deleteCarritoController } = require("../../Controllers/Carrito/deleteCarritoController");

const deleteCarritoHandler = async (req, res) => {
  const carritoId = req.params.id;

  const result = await deleteCarritoController(carritoId);

  if (result.success) {
    res.status(200).json({ success: true, message: result.message });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { deleteCarritoHandler };