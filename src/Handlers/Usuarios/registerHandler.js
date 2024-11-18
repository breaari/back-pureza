const express = require("express");
const { registerController } = require("../../Controllers/Usuario/registerController");

const registerHandler = async (req, res) => {
  const { usuario, email, password, tipo } = req.body;

  const result = await registerController(usuario, email, password, tipo);

  if (result.success) {
    res.status(201).json({ success: true, user: result.user, carrito: result.carrito });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
};

module.exports={registerHandler};
