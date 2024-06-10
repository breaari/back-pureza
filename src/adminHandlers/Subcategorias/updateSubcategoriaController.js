const { updateSubcategoriaController } = require("../../adminControllers/Subcategorias/updateSubcategoriaController");

const updateSubcategoriaHandler = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const result = await updateSubcategoriaController(id, updatedData);
        
        if (result.success) {
            res.status(200).json(result.subcategoria);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error en updateSubcategoriaHandler:", error);
        res.status(500).json({ message: "Error al actualizar la subcategoría. Por favor, inténtelo de nuevo más tarde" });
    }
}

module.exports = { updateSubcategoriaHandler };
