const { deleteCategoriaController } = require("../../adminControllers/Categorias/deleteCategoriaController");

const deleteCategoriaHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await deleteCategoriaController(id);

    res.status(200).json({ success: true, message: resultado.message });
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { deleteCategoriaHandler };
