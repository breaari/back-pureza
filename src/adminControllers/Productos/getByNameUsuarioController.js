const { Usuario } = require("../../DB_conection");
const { Op } = require("sequelize");

const getByNameUsuarioController = async (query, tipo) => {
  try {
    // Construir la cláusula where según los parámetros presentes
    let whereClause = {};

    if (query) {
      whereClause[Op.or] = [
        {
          usuario: {
            [Op.iLike]: `%${query}%`
          }
        },
        {
          email: {
            [Op.iLike]: `%${query}%`
          }
        }
      ];
    }

    if (tipo) {
      whereClause.tipo = tipo;
    }

    const usuarios = await Usuario.findAll({
      where: whereClause
    });

    if (!usuarios || usuarios.length === 0) {
      return { success: false, message: "No se encontraron usuarios que coincidan con la consulta" };
    }

    return { success: true, usuarios };
  } catch (error) {
    console.error('Error al buscar usuarios por nombre, email o tipo:', error);
    return { success: false, message: "Error al buscar usuarios" };
  }
};

module.exports = {
  getByNameUsuarioController,
};
