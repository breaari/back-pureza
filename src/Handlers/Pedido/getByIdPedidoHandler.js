const { getByIdPedidoController } = require("../../Controllers/Pedido/getByIdPedidoController");

const getByIdPedidoHandler = async (req, res) => {
  const { id } = req.params;

  const result = await getByIdPedidoController(id);

  if (result.success) {
    res.status(200).json({ success: true, pedido: result.pedido });
  } else {
    res.status(404).json({ success: false, message: result.message });
  }
};

module.exports = { getByIdPedidoHandler };
