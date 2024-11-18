const { Usuario } = require("../../DB_conection");

const getByIdUsuariosController = async (id) => {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return { success: false, message: "Usuario no encontrado" };
      }
      return { success: true, usuario: usuario };
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      return { success: false, message: "Error al obtener usuario. Por favor, inténtelo de nuevo más tarde" };
    }
  };
  
  module.exports = { getByIdUsuariosController };