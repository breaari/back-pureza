const mercadopago = require("mercadopago");

const createPreference = async (description, price, quantity) => {
    let preference = {
        items: [
            {
                title: description,
                unit_price: Number(price),
                quantity: Number(quantity),
            }
        ],
        back_urls: {
            success: "http://localhost:5173/carritodecompras",
            failure: "http://localhost:5173/carritodecompras",
            pending: "http://localhost:5173/carritodecompras"
        },
        auto_return: "approved",
    };

    try {
        const response = await mercadopago.preferences.create(preference);
        console.log("response:", response.body)
        return { success: true, init_point: response.body.init_point, id: response.body.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
};

const feedback = (paymentId, status, merchantOrderId) => {
    return {
        Payment: paymentId,
        Status: status,
        MerchantOrder: merchantOrderId
    };
};

module.exports = { createPreference, feedback };
