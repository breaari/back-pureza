const { Carrito } = require("../../DB_conection");

const getCarritosController = async () => {
  try {
    const carritos = await Carrito.findAll();
    return { success: true, carritos: carritos };
  } catch (error) {
    return { success: false, message: "Error al obtener los carritos. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { getCarritosController };
