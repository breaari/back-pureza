const XlsxPopulate = require('xlsx-populate');
const { Producto } = require('../../DB_conection'); // Asegúrate de importar el modelo de Producto

const exportExcelController = async () => {
  try {
    // Obtener los productos de la base de datos
    const productos = await Producto.findAll();

    // Crear un nuevo libro de trabajo
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);

    // Escribir encabezados
    const headers = [
        'ID', 'Nombre', 'Descripción', 'Precio Compra', 'Margen de ganancia', 'Precio Venta', 
        'Precio Promoción', 
    ];
    headers.forEach((header, index) => {
        sheet.cell(1, index + 1).value(header).style({ bold: true });
    });

    // Escribir los datos de los productos
    productos.forEach((producto, rowIndex) => {
        sheet.cell(rowIndex + 2, 1).value(producto.id);
        sheet.cell(rowIndex + 2, 2).value(producto.name);
        sheet.cell(rowIndex + 2, 3).value(producto.descripcion);
        sheet.cell(rowIndex + 2, 4).value(producto.preciocompra);
        sheet.cell(rowIndex + 2, 5).value(producto.ganancia);
        sheet.cell(rowIndex + 2, 6).value(producto.precioventa);
        sheet.cell(rowIndex + 2, 7).value(producto.preciopromo);
    });

    // Convertir el libro de trabajo a un buffer
    const buffer = await workbook.outputAsync();

    return { success: true, buffer: buffer };
  } catch (error) {
    console.error("Error al crear el archivo Excel:", error);
    return { success: false, message: "Error al crear el archivo Excel. Por favor, inténtelo de nuevo más tarde" };
  }
};

module.exports = { exportExcelController };
