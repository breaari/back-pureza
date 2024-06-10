const { getByIdSubcategoriaController } = require("../../adminControllers/Subcategorias/getByIdSubcategoriaController");

const getByIdSubcategoriaHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await getByIdSubcategoriaController(id);

        if (result.success) {
            res.status(200).json(result.subcategoria);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error en getByIdSubcategoriaHandler:", error);
        res.status(500).json({ message: "Error al obtener la subcategoría. Por favor, inténtelo de nuevo más tarde" });
    }
}

module.exports = { getByIdSubcategoriaHandler };
