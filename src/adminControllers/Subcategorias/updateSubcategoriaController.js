const { Subcategoria, Categoria } = require("../../DB_conection");

const updateSubcategoriaController = async (id, updatedData) => {
    try {
        // Buscar la subcategoría por su ID
        const subcategoria = await Subcategoria.findByPk(id);
        
        if (!subcategoria) {
            return { success: false, message: "Subcategoría no encontrada" };
        }

        // Verificar si la categoría asociada existe
        if (updatedData.categoriaId) {
            const categoria = await Categoria.findByPk(updatedData.categoriaId);
            if (!categoria) {
                return { success: false, message: "La categoría especificada no existe" };
            }
        }

        // Actualizar la información de la subcategoría
        await subcategoria.update(updatedData);

        return { success: true, subcategoria };
    } catch (error) {
        console.error("Error al actualizar subcategoría:", error);
        return { success: false, message: "Error al actualizar subcategoría. Por favor, inténtelo de nuevo más tarde" };
    }
}

module.exports = { updateSubcategoriaController };
