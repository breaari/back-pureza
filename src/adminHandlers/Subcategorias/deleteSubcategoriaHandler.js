const { deleteSubcategoriaController } = require("../../adminControllers/Subcategorias/deleteSubcategoriaController");

const deleteSubcategoriaHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await deleteSubcategoriaController(id);
    res.status(200).json({ success: true, message: resultado.message });
  } catch (error) {
    console.error("Error al eliminar la subcategoría:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { deleteSubcategoriaHandler };
