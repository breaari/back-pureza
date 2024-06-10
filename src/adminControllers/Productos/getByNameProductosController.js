// const { Producto } = require("../../DB_conection");
// const { Op } = require("sequelize");

// const getByNameProductoController = async (query, categoriaId, subcategoriaId, stock) => {
//   console.log("stock:", stock);
//   try {
//     const whereClause = {};

//     if (query) {
//       whereClause.name = {
//         [Op.iLike]: `%${query}%`
//       };
//     }

//     if (categoriaId) {
//       whereClause.categoriaId = categoriaId;
//     }

//     if (subcategoriaId) {
//       whereClause.subcategoriaId = subcategoriaId;
//     }

//     const productos = await Producto.findAll({
//       where: whereClause,
//     });

//     if (!productos || productos.length === 0) {
//       return { success: false, message: "No se encontraron productos que coincidan con la consulta" };
//     }

//     let filteredProductos = productos;

//     if (stock === 'con_stock') {
//       filteredProductos = productos.filter(producto => {
//         const stockData = JSON.parse(producto.stock);
//         return stockData.infinito || parseInt(stockData.limitado) > 0;
//       });
//     }

//     if (stock === 'sin_stock') {
//       filteredProductos = productos.filter(producto => {
//         const stockData = JSON.parse(producto.stock);
//         return !stockData.infinito && (parseInt(stockData.limitado) === 0 || stockData.limitado === "");
//       });
//     }

//     if (filteredProductos.length === 0) {
//       return { success: false, message: "No se encontraron productos con el stock especificado" };
//     }

//     return { success: true, productos: filteredProductos };
//   } catch (error) {
//     console.error('Error al buscar productos por nombre:', error);
//     return { success: false, message: "Error al buscar productos" };
//   }
// };

// module.exports = { getByNameProductoController };

const { Producto } = require("../../DB_conection");
const { Op } = require("sequelize");

const getByNameProductoController = async (query, categoriaIds, subcategoriaIds, stock) => {
  console.log("stock:", stock);
  try {
    const whereClause = {};

    if (query) {
      whereClause.name = {
        [Op.iLike]: `%${query}%`
      };
    }

    if (categoriaIds && categoriaIds.length > 0) {
      whereClause.categoriaId = {
        [Op.or]: categoriaIds
      };
    }

    if (subcategoriaIds && subcategoriaIds.length > 0) {
      whereClause.subcategoriaId = {
        [Op.or]: subcategoriaIds
      };
    }

    const productos = await Producto.findAll({
      where: whereClause,
    });

    if (!productos || productos.length === 0) {
      return { success: false, message: "No se encontraron productos que coincidan con la consulta" };
    }

    let filteredProductos = productos;

    if (stock === 'con_stock') {
      filteredProductos = productos.filter(producto => {
        const stockData = JSON.parse(producto.stock);
        return stockData.infinito || parseInt(stockData.limitado) > 0;
      });
    }

    if (stock === 'sin_stock') {
      filteredProductos = productos.filter(producto => {
        const stockData = JSON.parse(producto.stock);
        return !stockData.infinito && (parseInt(stockData.limitado) === 0 || stockData.limitado === "");
      });
    }

    if (filteredProductos.length === 0) {
      return { success: false, message: "No se encontraron productos con el stock especificado" };
    }

    return { success: true, productos: filteredProductos };
  } catch (error) {
    console.error('Error al buscar productos por nombre:', error);
    return { success: false, message: "Error al buscar productos" };
  }
};

module.exports = { getByNameProductoController };
