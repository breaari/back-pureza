const { getByNameUsuarioController } = require("../../adminControllers/Productos/getByNameUsuarioController");

const getByNameUsuarioHandler = async (req, res) => {
    console.log("query:", req.query)
  const { q, tipo } = req.query;
  
  if (!q && !tipo) {
    return res.status(400).json({ success: false, message: "La consulta es requerida" });
  }

  const result = await getByNameUsuarioController(q, tipo);

  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
};

module.exports = {
  getByNameUsuarioHandler,
};
