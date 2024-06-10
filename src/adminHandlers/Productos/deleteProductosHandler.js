const { deleteProductosController } = require("../../adminControllers/Productos/deleteProductosController");

const deleteProductosHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteProductosController(id);

        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(404).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error en el controlador deleteProductosHandler:', error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
};

module.exports = { deleteProductosHandler };
