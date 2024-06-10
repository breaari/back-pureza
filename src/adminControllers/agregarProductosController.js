const fs = require('fs');
const path = require('path');
const { Categoria, Producto, Subcategoria } = require("../DB_conection");

const agregarProductosController = async ({
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
  imagenes
}) => {

  console.log("categoria id:", categoriaId)
  try {
    // const categorias = await Categoria.findByPk(categoriaId);
    // console.log("categoria", categorias)
    // if (!categorias) {
    //   return { success: false, message: "Categoría no encontrada" };
    // }

    // const subcategoria = await Subcategoria.findOne({
    //   where: {
    //     id: subcategoriaId,
    //     categoriaId: categoriaId,
    //   },
    // });

    // if (!subcategoria) {
    //   return { success: false, message: "Subcategoría no encontrada o no pertenece a la categoría indicada" };
    // }

    // const imagenPaths = imagenes.map(file => {
    //   const newPath = path.join('uploads', file.filename);
    //   fs.renameSync(file.path, newPath);  // Move file to correct location
    //   return newPath;

    const imagenPaths = imagenes.map(file => file.path);

    const nuevoProducto = await Producto.create({
      id,
      name,
      descripcion,
      variantes,
      precioventa,
      preciocompra,
      ganancia,
      preciopromo,
      stock,
      imagen: imagenPaths.join(','),
      categoriaId,
      subcategoriaId
    }, {
      include: [] // Incluir un array vacío para evitar cargar las asociaciones
    });
    
    return { success: true, producto: nuevoProducto };
  } catch (error) {
    console.error('Error al crear el producto:', error);
    return { success: false, message: "Error al crear el producto" };
  }
};

module.exports = {
  agregarProductosController,
};
