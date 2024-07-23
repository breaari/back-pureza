const { DataTypes, UUID } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Pedido", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // direccion_entrega: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // metodo_envio: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    pedido: {
      type: DataTypes.JSON,
      allowNull: false,
      // Example structure: [{ productId: "24001", cantidad: 2 }, { productId: "24004", cantidad: 1 }]
    },
    // numero_contacto: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // link_seguimiento: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Este campo es opcional
    // },
    // tipo_direccion: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Este campo es opcional, puede ser 'Residencial', 'Comercial', etc.
    // },
    // indicaciones_entrega: {
    //   type: DataTypes.TEXT,
    //   allowNull: true, // Este campo es opcional para indicaciones adicionales
    // },
    // empresa_transporte: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Empresa de transporte para envío por correo
    // },
    // sucursal_o_domicilio: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Sucursal o a domicilio para envío por correo
    // },
    userId: {
      type: DataTypes.UUID,
      allowNull: false, // ID del usuario que realiza el pedido
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      // Calcula y almacena el total del pedido
    },
    // id_pago: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Sucursal o a domicilio para envío por correo
    // },
  });
};
