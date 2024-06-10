// const { Pedido } = require("../../DB_conection");

// const updateEstadoPedidoController = async (data) => {
//     const { pedidoId, nuevoEstado, id_pago } = data;
//     console.log('Recibido en el controlador:', data);
//     console.log('Desestructurado:', { pedidoId, nuevoEstado });
//     try {
//         // Buscar el pedido por su ID
//         const pedido = await Pedido.findByPk(pedidoId);

//         // Verificar si el pedido existe
//         if (!pedido) {
//             console.log("Pedido no encontrado");
//             return { success: false, message: "Pedido no encontrado" };
//         }

//         console.log(`Pedido encontrado: ${JSON.stringify(pedido)}`);
//         console.log(`Actualizando estado a: ${nuevoEstado}`);

//         // Actualizar el estado del pedido
//         const [numberOfAffectedRows, affectedRows] = await Pedido.update(
//             { estado: nuevoEstado },
//             { where: { id: pedidoId }, returning: true }
//         );

//         console.log(`Filas afectadas: ${numberOfAffectedRows}`);
//         console.log(`Pedido actualizado: ${JSON.stringify(affectedRows)}`);

//         return { success: true, message: "Estado del pedido actualizado correctamente" };
//     } catch (error) {
//         console.error("Error al actualizar estado del pedido:", error);
//         return { success: false, message: "Error al actualizar estado del pedido. Por favor, inténtelo de nuevo más tarde" };
//     }
// };

// module.exports = { updateEstadoPedidoController };

const { Pedido } = require("../../DB_conection");

const updateEstadoPedidoController = async (data) => {
    const { pedidoId, nuevoEstado, id_pago } = data;
    console.log('Recibido en el controlador:', data);
    console.log('Desestructurado:', { pedidoId, nuevoEstado, id_pago });

    try {
        // Buscar el pedido por su ID
        const pedido = await Pedido.findByPk(pedidoId);

        // Verificar si el pedido existe
        if (!pedido) {
            console.log("Pedido no encontrado");
            return { success: false, message: "Pedido no encontrado" };
        }

        console.log(`Pedido encontrado: ${JSON.stringify(pedido)}`);
        console.log(`Actualizando estado a: ${nuevoEstado}`);

        // Crear el objeto de actualización
        const updateData = { estado: nuevoEstado };
        if (id_pago) {
            updateData.id_pago = id_pago;
        }

        // Actualizar el estado del pedido (y id_pago si está presente)
        const [numberOfAffectedRows, affectedRows] = await Pedido.update(
            updateData,
            { where: { id: pedidoId }, returning: true }
        );

        console.log(`Filas afectadas: ${numberOfAffectedRows}`);
        console.log(`Pedido actualizado: ${JSON.stringify(affectedRows)}`);

        return { success: true, message: "Estado del pedido actualizado correctamente" };
    } catch (error) {
        console.error("Error al actualizar estado del pedido:", error);
        return { success: false, message: "Error al actualizar estado del pedido. Por favor, inténtelo de nuevo más tarde" };
    }
};

module.exports = { updateEstadoPedidoController };
