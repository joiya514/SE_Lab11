const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Import authentication routes
const authRoutes = require('./routes/auth');
// Import product routes
const productRoutes = require('./routes/products');



// MongoDB connection
mongoose.connect('mongodb+srv://2022cs16:Sri89b51nFHyyk5O@se-lab10.lgobe.mongodb.net/?retryWrites=true&w=majority&appName=SE-Lab10')
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Database connection error:', err));

// Middleware
app.use(express.json());
app.use(cors());  // Allow cross-origin requests

// Use auth routes
app.use('/api/auth', authRoutes);
// Use product routes
app.use('/api/products', productRoutes);


// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
