import Product from "../models/Product.js";

// GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// POST /api/products/create
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, imageUrl, description } = req.body;
    if (!name || !price)
      return res.status(400).json({ message: "Name and price are required" });

    const product = await Product.create({
      name,
      price,
      category,
      imageUrl,
      description,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// PUT /api/products/update/:id
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// DELETE /api/products/delete/:id
export const deleteProductById = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

// DELETE /api/products/delete-by-name/:name
export const deleteProductByName = async (req, res) => {
  try {
    const { name } = req.params;
     const deletedProduct = await Product.findOneAndDelete({
      $or: [{ name: name }, { nume: name }],
    });
    if (!deletedProduct)
      return res.status(404).json({ message: `Product "${name}" not found` });

    res.json({
      message: `Product "${name}" deleted successfully`,
      deleted,
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product by name" });
  }
};
