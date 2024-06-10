const { createPreference, feedback } = require('../../Controllers/MercadoPago/mercadoPagoController.');

const createPreferenceHandler = async (req, res) => {
    const { description, price, quantity } = req.body;

    const result = await createPreference(description, price, quantity);

    if (result.success) {
        res.status(201).json({ success: true, init_point: result.init_point, id: result.id});
    } else {
        res.status(500).json({ success: false, message: result.message });
    }
};

const feedbackHandler = (req, res) => {
    const { payment_id, status, merchant_order_id } = req.query;

    const result = feedback(payment_id, status, merchant_order_id);

    res.status(200).json(result);
};

module.exports = { createPreferenceHandler, feedbackHandler };
