const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the uploads directory (for images)
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect('mongodb://localhost/product_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// API routes
app.use('/api/products', productRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
