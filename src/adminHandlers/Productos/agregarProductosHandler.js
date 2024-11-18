const { agregarProductosController } = require('../../adminControllers/Productos/agregarProductosController');

const agregarProductosHandler = async (req, res) => {

  const {
    id,
    name,
    descripcion,
    variantes,
    precioventa,
    preciocompra,
    ganancia,
    preciopromo,
    stock,
    categoriaId,
    subcategoriaId,
  } = req.body;
  
  const imagenes = req.files;

  try {
   
    const parsedBody = {
      id,
      name,
      descripcion,
      variantes,
      precioventa: parseFloat(precioventa),
      preciocompra: parseFloat(preciocompra),
      ganancia: parseFloat(ganancia),
      preciopromo: parseFloat(preciopromo),
      stock,
      categoriaId,
      subcategoriaId,
      imagenes,
    };    
    console.log("parseBodt:", parsedBody)

    const result = await agregarProductosController(parsedBody);

    if (result.success) {
      res.status(200).json({ success: true, producto: result.producto });
    } else {
      res.status(401).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error en el controlador agregarProductosHandler:', error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

module.exports = { agregarProductosHandler };

