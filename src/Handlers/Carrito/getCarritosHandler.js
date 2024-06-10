const express = require("express");
const { getCarritosController } = require("../../Controllers/Carrito/getCarritosController");

const getCarritosHandler = async (req, res) => {
  const result = await getCarritosController();

  if (result.success) {
    res.status(200).json({ success: true, carritos: result.carritos });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports = { getCarritosHandler };
