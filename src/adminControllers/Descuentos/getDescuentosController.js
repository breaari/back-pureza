const { Descuento } = require("../../DB_conection")

const getDescuentosController = async () => {
  try {
    const descuentos = await Descuento.findAll();
    return { success: true, descuentos };
  } catch (error) {
    console.error('Error al obtener los descuentos:', error);
    return { success: false, message: "Error al obtener los descuentos" };
  }
};

module.exports = {
  getDescuentosController,
};
