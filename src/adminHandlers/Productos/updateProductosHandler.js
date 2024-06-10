
const { updateProductosController } = require("../../adminControllers/Productos/updateProductosController");

const updateProductosHandler = async (req, res) => {
    console.log("funciono");
    const { id } = req.params;
    let { imagen } = req.body; // Suponemos que 'imagen' es un campo de texto
    const imagenes = req.files;
// Suponemos que 'imagenes' es el campo de archivo

    // Procesar las imágenes (si se envían)
    let imagenActualizada = imagen || ''; // Inicializar imagenActualizada como cadena vacía si imagen es nula o indefinida
    if (Array.isArray(imagenes)) {
        // Procesar las imágenes adicionales si se envían
        for (let i = 0; i < imagenes.length; i++) {
            // Agregar la ruta de la imagen al texto 'imagen' actualizado (o cualquier lógica necesaria)
            imagenActualizada += (imagenActualizada ? ',' : '') + 'uploads/' + imagenes[i].filename;
        }
    }

    const updateData = {
        ...req.body,
        imagen: imagenActualizada,
        preciopromo: req.body.preciopromo !== 'null' ? parseFloat(req.body.preciopromo) : null,
        subcategoriaId: req.body.subcategoriaId === "" ? null : req.body.subcategoriaId
    };

    console.log("updateData:", updateData);

    try {
        const result = await updateProductosController(id, updateData);

        if (result.success) {
            res.status(200).json({ success: true, producto: result.producto });
        } else {
            res.status(404).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error en el controlador updateProductosHandler:', error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
};

module.exports = { updateProductosHandler };
