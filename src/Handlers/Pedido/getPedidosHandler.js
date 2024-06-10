const { getPedidosController } = require("../../Controllers/Pedido/getPedidosController");

const getPedidosHandler = async (req, res) => {
  const result = await getPedidosController();

  if (result.success) {
    res.status(200).json({ success: true, pedidos: result.pedidos });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { getPedidosHandler };
