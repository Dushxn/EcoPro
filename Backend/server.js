require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import cors
const { connectDB } = require('./DB/connectDB');
const authRoutes = require('./routes/auth.route');
const diseaseRoute = require('./routes/disease.route');

// Create express app
const app = express();

// Middleware
app.use(express.json()); 

// Setup CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/disease', diseaseRoute);

// Listen for requests
app.listen(process.env.PORT || 4000, () => {
  connectDB();
  console.log(`Listening on port ${process.env.PORT || 4000}`);
});
