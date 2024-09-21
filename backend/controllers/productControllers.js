const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    const product = new Product({ name, description, price, category, image });

    try {
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};
