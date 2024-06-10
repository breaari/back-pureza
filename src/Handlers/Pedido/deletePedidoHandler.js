const { deletePedidoController } = require("../../Controllers/Pedido/deletePedidoController");

const deletePedidoHandler = async (req, res) => {

  const { id } = req.params;

  const result = await deletePedidoController(id);

  if (result.success) {
    res.status(200).json({ success: true, message: result.message });
  } else {
    res.status(404).json({ success: false, message: result.message });
  }
};

module.exports = { deletePedidoHandler };
