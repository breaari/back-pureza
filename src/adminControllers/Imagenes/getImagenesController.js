const path = require('path');
const fs = require('fs');

const getImagenes = (req, res) => {
    const imagen = req.params.imagen;
    const rutaImagen = path.join(__dirname, '..', '..','..', 'uploads', imagen);

    fs.access(rutaImagen, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ success: false, message: 'Imagen no encontrada' });
        }

        res.sendFile(rutaImagen);
    });
};

module.exports = {
    getImagenes
};
