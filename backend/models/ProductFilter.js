// models/ProductFilter.js
const mongoose = require('mongoose');

const ProductFilterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ProductFilter', ProductFilterSchema);
