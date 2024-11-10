// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const smartwatchRoutes = require('./routes/smartwatch');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/smartWatch', express.static('smartWatch'));  // Serve static files

// MongoDB connection
mongoose.connect('mongodb://localhost/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/smartwatches', smartwatchRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Product API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
