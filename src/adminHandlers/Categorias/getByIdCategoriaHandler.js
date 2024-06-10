const express = require("express");
const { getByIdCategoriaController } = require("../../adminControllers/Categorias/getByIdCategoriaController");

const getByIdCategoriaHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const categoria = await getByIdCategoriaController(id);
    res.status(200).json({ success: true, categoria });
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(404).json({ success: false, message: "Categoría no encontrada" });
  }
};

module.exports = { getByIdCategoriaHandler };