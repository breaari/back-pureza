const { Carrito } = require("../../DB_conection");

const updateCarritoController = async (updateData) => {
  const { carritoId, productId, cantidad, estado, vaciarCarrito } = updateData;

  console.log("carritoID:", updateData)
  try {
    // Buscar el carrito por su ID
    const carrito = await Carrito.findByPk(carritoId);

    if (!carrito) {
      return { success: false, message: "Carrito no encontrado" };
    }
    console.log("carrito:", carrito)
    // Si se indica que se debe vaciar el carrito, eliminar todos los productos
    if (vaciarCarrito) {
      await carrito.update({ productos: [] });
    } else {
      // Obtener los productos actuales del carrito
      let productos = carrito.productos || [];
        
      // Si la cantidad es 0, eliminar el producto del carrito
      if (cantidad === 0) {
        productos = productos.filter(item => item.productId !== productId);
      } else {
        // Buscar si el producto ya está en el carrito
        const productIndex = productos.findIndex(item => item.productId === productId);

        if (productIndex >= 0) {
          // Si el producto ya está en el carrito, reemplazar la cantidad
          productos[productIndex].cantidad = cantidad;
        } else {
          // Si el producto no está en el carrito, agregarlo
          productos.push({ productId: productId, cantidad: cantidad });
        }
      }

      // Actualizar el carrito con los nuevos productos y estado
      await Carrito.update(
        { productos: productos, estado: estado },
        { where: { id: carritoId } }
      );
    }

    // Volver a obtener el carrito actualizado para devolverlo
    const updatedCarrito = await Carrito.findByPk(carritoId);
    console.log("updatedCarrito:", updatedCarrito);

    return { success: true, carrito: updatedCarrito };
  } catch (error) {
    console.error("Error al actualizar carrito:", error);
    return { success: false, message: "Error al actualizar carrito. Por favor, inténtelo de nuevo más tarde" };
  }
};

module.exports = { updateCarritoController };
