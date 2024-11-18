const { deleteUsuarioController } = require("../../adminControllers/Usuarios/deleteUsuariosController");

const deleteUsuarioHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID de usuario es requerido" });
  }

  const result = await deleteUsuarioController(id);

  if (result.success) {
    return res.status(200).json(result);
  } else if (result.message === "Usuario no encontrado") {
    return res.status(404).json(result);
  } else {
    return res.status(500).json(result);
  }
}

module.exports = { deleteUsuarioHandler };
