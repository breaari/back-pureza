const express = require("express");
const { updateCarritoController } = require('../../Controllers/Carrito/updateCarritoController')

const updateCarritoHandler = async (req, res) => {
  const updateData = req.body; // Suponemos que los datos de actualización se envían en el cuerpo de la solicitud

  console.log("updateData:", updateData)
    try {
        const result = await updateCarritoController( updateData);

        if (result.success) {
            res.status(200).json({ success: true, carrito: result.carrito });
        } else {
            res.status(404).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error en el controlador updateCarritoHandler:', error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
};

module.exports = { updateCarritoHandler };

