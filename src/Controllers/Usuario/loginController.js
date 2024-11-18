const { Usuario, Carrito } = require("../../DB_conection");

const loginController = async (email, password) => {
  try {
    // Buscar al usuario por email y contraseña
    const user = await Usuario.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (!user) {
      return { success: false, message: "Correo electrónico o contraseña incorrectos" };
    }

    // Verificar si el usuario es un usuario común
    if (user.tipo !== "usuario_comun") {
      return { success: false, message: "Acceso denegado. Solo los usuarios pueden iniciar sesión aquí" };
    }

    // Buscar el carrito asociado al usuario
    const carrito = await Carrito.findOne({
      where: {
        userId: user.id,
      },
    });

    // Devolver el usuario y el carrito asociado
    return { success: true, user: user, carrito: carrito };
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return { success: false, message: "Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { loginController };
