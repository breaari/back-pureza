const express = require("express");
const { updateEstadoPedidoController } = require("../../Controllers/Pedido/updateEstadoPedidoController");

const updateEstadoPedidoHandler = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    const data = { pedidoId: id, nuevoEstado: estado };
    console.log('Data enviada al controlador:', data);

    const result = await updateEstadoPedidoController(data);

    if (result.success) {
        res.status(200).json({ success: true, message: result.message });
    } else {
        res.status(500).json({ success: false, message: result.message });
    }
};

module.exports = { updateEstadoPedidoHandler };
