const { getByIdUsuariosController } = require("../adminControllers/getByIdUsuariosController");

const getByIdUsuariosHandler = async (req, res) => {
  const { id } = req.params;
  const result = await getByIdUsuariosController(id);
  if (result.success) {
    res.status(200).json(result.usuario);
  } else {
    res.status(result.message === "Usuario no encontrado" ? 404 : 500).json({ message: result.message });
  }
};

module.exports = { getByIdUsuariosHandler };