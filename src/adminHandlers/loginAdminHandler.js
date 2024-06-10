const express = require("express");
const { loginAdminCotroller } = require("../adminControllers/loginAdminController");

 const loginAdminHandler = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginAdminCotroller(email, password);

  if (result.success) {
    res.status(200).json({ success: true, user: result.user });
  } else {
    res.status(401).json({ success: false, message: result.message });
  }
};

module.exports = { loginAdminHandler};
