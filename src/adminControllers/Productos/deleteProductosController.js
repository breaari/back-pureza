const { Producto } = require("../../DB_conection");

const deleteProductosController = async (id) => {
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return { success: false, message: "Producto no encontrado" };
        }
        
        await producto.destroy();
        return { success: true, message: "Producto eliminado exitosamente" };
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        return { success: false, message: "Error al eliminar producto. Por favor, inténtelo de nuevo más tarde" };
    }
};

module.exports = { deleteProductosController };
