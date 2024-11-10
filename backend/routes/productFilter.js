// routes/productFilters.js

const express = require('express');
const router = express.Router();

// Define filter options (in a real app, this could come from a database)
const filterOptions = ['Smart Phone', 'Smart Watch', 'Head Phone', 'Ipod'];

// Route to get product filter options
router.get('/api/product-filters', (req, res) => {
    res.json(filterOptions);
});

module.exports = router;
