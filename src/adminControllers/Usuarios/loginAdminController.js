const { Usuario } = require("../../DB_conection");

 const loginAdminCotroller = async (email, password) => {

  try {
    const user = await Usuario.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (!user) {
      return { success: false, message: "Correo electrónico o contraseña incorrectos" };
    }

    if (user.tipo !== "administrador") {
      return { success: false, message: "Acceso denegado. Solo los administradores pueden iniciar sesión aquí" };
    }

    return { success: true, user: user };
  } catch (error) {
    return { success: false, message: "Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde" };
  }
}

module.exports= { loginAdminCotroller};