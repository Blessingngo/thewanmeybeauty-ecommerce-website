router.get('/', async (req, res) => {
  const { category, minPrice, maxPrice, brand, rating } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (brand) filter.brand = brand;
  if (rating) filter.rating = { $gte: rating };
  if (minPrice && maxPrice) filter.price = { $gte: minPrice, $lte: maxPrice };

  try {
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});
