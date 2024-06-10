// const { getByNameProductoController } = require("../../adminControllers/Productos/getByNameProductosController");

// const getByNameProductoHandler = async (req, res) => {
//   console.log("Handler se está ejecutando");
  
//   const { q, categoriaId, subcategoriaId, stock } = req.query;
//   console.log("req.query:", req.query)

//   if (!q && !categoriaId && !subcategoriaId && stock === undefined) {
//     return res.status(400).json({ success: false, message: "Se requiere al menos un parámetro de consulta válido" });
//   }

//   const response = await getByNameProductoController(q, categoriaId, subcategoriaId, stock);

//   if (!response.success) {
//     return res.status(404).json({ success: false, message: response.message });
//   }

//   return res.status(200).json({ success: true, productos: response.productos });
// };

// module.exports = {
//   getByNameProductoHandler,
// };

const { getByNameProductoController } = require("../../adminControllers/Productos/getByNameProductosController");

const getByNameProductoHandler = async (req, res) => {
  console.log("Handler se está ejecutando");
  
  let { q, categoriaId, subcategoriaId, stock } = req.query;
  console.log("req.query:", req.query);

  if (!q && !categoriaId && !subcategoriaId && stock === undefined) {
    return res.status(400).json({ success: false, message: "Se requiere al menos un parámetro de consulta válido" });
  }

  // Convertir categoriaId y subcategoriaId en arrays si no lo son
  if (categoriaId && !Array.isArray(categoriaId)) {
    categoriaId = [categoriaId];
  }

  if (subcategoriaId && !Array.isArray(subcategoriaId)) {
    subcategoriaId = [subcategoriaId];
  }

  const response = await getByNameProductoController(q, categoriaId, subcategoriaId, stock);

  if (!response.success) {
    return res.status(404).json({ success: false, message: response.message });
  }

  return res.status(200).json({ success: true, productos: response.productos });
};

module.exports = {
  getByNameProductoHandler,
};

