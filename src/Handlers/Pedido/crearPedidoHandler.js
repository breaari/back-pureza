const express = require("express");
const { crearPedidoController } = require("../../Controllers/Pedido/crearPedidoController");

const crearPedidoHandler = async (req, res) => {
  const pedidoData = req.body;

  const result = await crearPedidoController(pedidoData);

  if (result.success) {
    res.status(201).json({ success: true, pedido: result.pedido });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { crearPedidoHandler };
