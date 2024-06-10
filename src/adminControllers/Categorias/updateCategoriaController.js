const { Categoria } = require("../../DB_conection");

const updateCategoriaController = async (id, updatedData) => {
    try {
        // Buscar la categoría por su ID
        const categoria = await Categoria.findByPk(id);
        
        if (!categoria) {
            return { success: false, message: "Categoría no encontrada" };
        }

        // Actualizar la información de la categoría
        await categoria.update(updatedData);

        return { success: true, categoria };
    } catch (error) {
        console.error("Error al actualizar categoría:", error);
        return { success: false, message: "Error al actualizar categoría. Por favor, inténtelo de nuevo más tarde" };
    }
}

module.exports = { updateCategoriaController };
