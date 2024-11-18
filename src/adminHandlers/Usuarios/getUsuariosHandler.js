const { getUsuariosController } = require("../../adminControllers/Usuarios/getUsuariosController");

const getUsuariosHandler = async (req, res) => {
  try {
    const result = await getUsuariosController();
    if (result.success) {
      res.status(200).json({ success: true, usuarios: result.usuarios });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error("Error en el manejador de obtener usuarios:", error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { getUsuariosHandler };