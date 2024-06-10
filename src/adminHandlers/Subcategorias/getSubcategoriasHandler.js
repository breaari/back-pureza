const { getSubcategoriasController }= require('../../adminControllers/Subcategorias/getSubcategoriasController')

const getSubcategoriasHandler = async (req, res) => {
  try {
    const subcategorias = await getSubcategoriasController();
    res.status(200).json({ subcategorias });
  } catch (error) {
    console.error("Error en getSubcategoriasHandler:", error);
    res.status(500).json({ message: "Error al obtener las subcategorías. Por favor, inténtelo de nuevo más tarde" });
  }
};

module.exports = { getSubcategoriasHandler };

