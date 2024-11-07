// routes/productRoutes.js
const express = require('express');
const multer = require('multer');  // Used for handling file uploads
const path = require('path');
const Product = require('../models/Product');
const router = express.Router();

// Set up multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Store images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });

// POST route for creating a new product
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file.path;

    const newProduct = new Product({
      name,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route for getting all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE route for deleting a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
