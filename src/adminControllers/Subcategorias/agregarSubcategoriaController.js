const { Categoria, Subcategoria } = require("../../DB_conection");

const agregarSubcategoriaController = async ({ nombre, categoriaId }) => {
  console.log("categoriaId:", categoriaId)
  try {
    // Verificar si la categoría existe
    const categoria = await Categoria.findByPk(categoriaId);
    if (!categoria) {
      throw new Error('La categoría especificada no existe.');
    }

    // Verificar si la subcategoría ya existe en la misma categoría
    const subcategoriaExistente = await Subcategoria.findOne({
      where: {
        nombre,
        categoriaId: categoriaId,
      },
    });

    if (subcategoriaExistente) {
      throw new Error('La subcategoría ya existe en esta categoría.');
    }

    // Crear la subcategoría y asociarla con la categoría
    const nuevaSubcategoria = await Subcategoria.create({
      nombre,
      categoriaId: categoriaId,
    });

    return nuevaSubcategoria;
  } catch (error) {
    throw new Error(`Error al crear la subcategoría: ${error.message}`);
  }
};

module.exports = { agregarSubcategoriaController };

