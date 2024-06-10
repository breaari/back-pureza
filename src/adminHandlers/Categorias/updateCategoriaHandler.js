const { updateCategoriaController } = require("../../adminControllers/Categorias/updateCategoriaController");

const updateCategoriaHandler = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const result = await updateCategoriaController(id, updatedData);
        
        if (result.success) {
            res.status(200).json(result.categoria);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error en updateCategoriaHandler:", error);
        res.status(500).json({ message: "Error al actualizar la categoría. Por favor, inténtelo de nuevo más tarde" });
    }
}

module.exports = { updateCategoriaHandler };
