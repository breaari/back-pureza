const { Subcategoria } = require("../../DB_conection");

const getByIdSubcategoriaController = async (id) => {
    try {
        // Buscar la subcategoría por su ID
        const subcategoria = await Subcategoria.findByPk(id);

        if (!subcategoria) {
            return { success: false, message: "Subcategoría no encontrada" };
        }

        return { success: true, subcategoria };
    } catch (error) {
        console.error("Error al obtener subcategoría:", error);
        return { success: false, message: "Error al obtener subcategoría. Por favor, inténtelo de nuevo más tarde" };
    }
}

module.exports = { getByIdSubcategoriaController };
