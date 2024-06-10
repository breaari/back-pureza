const express = require("express");
const { agregarSubcategoriaController } = require("../../adminControllers/Subcategorias/agregarSubcategoriaController");

const agregarSubcategoriaHandler = async (req, res) => {
  const { nombre, categoriaId } = req.body;

  try {
    const nuevaSubcategoria = await agregarSubcategoriaController({ nombre, categoriaId });

    res.status(201).json({ success: true, subcategoria: nuevaSubcategoria });
  } catch (error) {
    console.error("Error al agregar la subcategoría:", error);
    res.status(500).json({ success: false, message: "Error al agregar la subcategoría" });
  }
};

module.exports = { agregarSubcategoriaHandler };
