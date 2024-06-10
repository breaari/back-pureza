const express = require("express");
const { getByIdCarritoController } = require("../../Controllers/Carrito/getByIdCarritoController");

const getByIdCarritoHandler = async (req, res) => {
  const { id } = req.params;

  const result = await getByIdCarritoController(id);

  if (result.success) {
    res.status(200).json({ success: true, carrito: result.carrito });
  } else {
    res.status(404).json({ success: false, message: result.message });
  }
};

module.exports = { getByIdCarritoHandler };
