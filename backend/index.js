const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Sample list of items
const itemList = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// API route to get the list of items
app.get('/api/items', (req, res) => {
  res.json(itemList);
});

// Optional: Default route for root (/) to avoid 404 on the root
app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /api/items to see the list.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

