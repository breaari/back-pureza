const express = require("express");
const { getCategoriasController } = require("../../adminControllers/Categorias/getCategoriasController");

const getCategoriasHandler = async (req, res) => {
  try {
    const categorias = await getCategoriasController();

    res.status(200).json({ categorias });
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    res.status(500).json({ success: false, message: "Error al obtener las categorías" });
  }
};

module.exports = { getCategoriasHandler };
