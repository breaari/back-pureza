const { Producto } = require("../../DB_conection");

const updateProductosController = async ( id, updateData) => {
    
    try {
        // Buscar el producto por su ID
        const producto = await Producto.findByPk(id);
        
        if (!producto) {
            return { success: false, message: "Producto no encontrado" };
        }

        // Actualizar la información del producto
        await producto.update(updateData);

        return { success: true, producto };
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        return { success: false, message: "Error al actualizar producto. Por favor, inténtelo de nuevo más tarde" };
    }
}

module.exports = { updateProductosController };
