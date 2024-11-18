const express = require("express");
const { loginController } = require("../../Controllers/Usuario/loginController");

 const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginController(email, password);

  if (result.success) {
    res.status(200).json({ success: true, user: result.user, carrito: result.carrito });
  } else {
    res.status(401).json({ success: false, message: result.message });
  }
};

module.exports = { loginHandler};
