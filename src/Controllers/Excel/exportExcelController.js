// const XlsxPopulate = require('xlsx-populate');
// const { Producto } = require('../../DB_conection'); // Asegúrate de importar el modelo de Producto

// const exportExcelController = async () => {
//   try {
//     // Obtener los productos de la base de datos
//     const productos = await Producto.findAll();

//     // Crear un nuevo libro de trabajo
//     const workbook = await XlsxPopulate.fromBlankAsync();
//     const sheet = workbook.sheet(0);

//     // Escribir encabezados
//     const headers = [
//         'ID', 'Nombre', 'Descripción', 'Precio Compra', 'Precio Venta', 
//         'Precio Promoción', 
//     ];
//     headers.forEach((header, index) => {
//         sheet.cell(1, index + 1).value(header).style({ bold: true });
//     });

//     // Escribir los datos de los productos
//     productos.forEach((producto, rowIndex) => {
//         sheet.cell(rowIndex + 2, 1).value(producto.id);
//         sheet.cell(rowIndex + 2, 2).value(producto.name);
//         sheet.cell(rowIndex + 2, 3).value(producto.descripcion);
//         sheet.cell(rowIndex + 2, 4).value(producto.preciocompra);
//         sheet.cell(rowIndex + 2, 6).value(producto.precioventa);
//         sheet.cell(rowIndex + 2, 7).value(producto.preciopromo);
//     });

//     // Convertir el libro de trabajo a un buffer
//     const buffer = await workbook.outputAsync();

//     return { success: true, buffer: buffer };
//   } catch (error) {
//     console.error("Error al crear el archivo Excel:", error);
//     return { success: false, message: "Error al crear el archivo Excel. Por favor, inténtelo de nuevo más tarde" };
//   }
// };

// module.exports = { exportExcelController };

const XlsxPopulate = require('xlsx-populate');
const { Producto, Categoria, Subcategoria } = require('../../DB_conection'); // Importar también Categoria y Subcategoria

const exportExcelController = async () => {
  try {
    // Obtener los productos de la base de datos con las relaciones de Categoria y Subcategoria
    const productos = await Producto.findAll({
      include: [
        {
          model: Categoria,
          as: 'Categoria', // Asegúrate de que esté bien relacionado en el modelo
          attributes: ['id', 'nombre'] // Corregido 'name' a 'nombre'
        },
        {
          model: Subcategoria,
          as: 'Subcategoria', // Asegúrate de que esté bien relacionado en el modelo
          attributes: ['id', 'nombre'] // Corregido 'name' a 'nombre'
        }
      ]
    });

    // Crear un nuevo libro de trabajo
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);

    // Escribir encabezados
    const headers = [
      'ID', 'Nombre', 'Descripción', 'Precio Compra', 'Precio Venta',
      'Precio Promoción', 'Categoria', 'Subcategoria'
    ];
    headers.forEach((header, index) => {
      sheet.cell(1, index + 1).value(header).style({ bold: true });
    });

    // Escribir los datos de los productos
    for (let rowIndex = 0; rowIndex < productos.length; rowIndex++) {
      const producto = productos[rowIndex];

      sheet.cell(rowIndex + 2, 1).value(producto.id);
      sheet.cell(rowIndex + 2, 2).value(producto.name);
      sheet.cell(rowIndex + 2, 3).value(producto.descripcion);
      sheet.cell(rowIndex + 2, 4).value(producto.preciocompra);
      sheet.cell(rowIndex + 2, 5).value(producto.precioventa);
      sheet.cell(rowIndex + 2, 6).value(producto.preciopromo);

      // Escribir los datos de Categoria y Subcategoria
      const categoriaId = producto.categoriaId;
      const subcategoriaId = producto.subcategoriaId;

      // Buscar los nombres de Categoria y Subcategoria usando los ids
      const categoria = await Categoria.findByPk(categoriaId); // Buscar por el ID
      const subcategoria = await Subcategoria.findByPk(subcategoriaId); // Buscar por el ID

      const categoriaName = categoria ? categoria.nombre : 'No asignada';
      const subcategoriaName = subcategoria ? subcategoria.nombre : 'No asignada';

      sheet.cell(rowIndex + 2, 7).value(categoriaName);
      sheet.cell(rowIndex + 2, 8).value(subcategoriaName);
    }

    // Convertir el libro de trabajo a un buffer
    const buffer = await workbook.outputAsync();

    return { success: true, buffer: buffer };
  } catch (error) {
    console.error("Error al crear el archivo Excel:", error);
    return { success: false, message: "Error al crear el archivo Excel. Por favor, inténtelo de nuevo más tarde" };
  }
};

module.exports = { exportExcelController };
