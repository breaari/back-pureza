const express = require("express");
const { agregarCategoriaController } = require("../../adminControllers/Categorias/agregarCategoriaController");

const agregarCategoriaHandler = async (req, res) => {
  const { nombre } = req.body;

  try {
    const nuevaCategoria = await agregarCategoriaController({ nombre });

    res.status(201).json({ success: true, categoria: nuevaCategoria });
  } catch (error) {
    console.error("Error al agregar la categoría:", error);
    res.status(500).json({ success: false, message: "Error al agregar la categoría" });
  }
};

module.exports = { agregarCategoriaHandler };
