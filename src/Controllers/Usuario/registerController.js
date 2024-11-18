const { Usuario, Carrito } = require("../../DB_conection");

const registerController = async (usuario, email, password, tipo) => {
  try {
    // Crear el usuario
    const user = await Usuario.create({
      usuario: usuario,
      email: email,
      password: password,
      tipo: tipo
    });

    // Si el tipo de usuario es "usuario_comun", crear un carrito asociado al usuario
    if (tipo === 'usuario_comun') {
     const carrito = await Carrito.create({
        userId: user.id,
        productos: [],
        estado: 'pendiente'
      });
    }

    return { success: true, user: user };
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return { success: false, message: "Error al crear usuario. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports = { registerController };
