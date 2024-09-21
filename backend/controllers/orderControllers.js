const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { user, products, totalAmount, paymentMethod } = req.body;
    const order = new Order({ user, products, totalAmount, paymentMethod });

    try {
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getOrdersByUser = async (req, res) => {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
};
