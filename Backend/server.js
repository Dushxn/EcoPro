//8/24/2024
require('dotenv').config();
const express = require('express');


const { connectDB } = require('./DB/connectDB');
const authRoutes = require('./routes/auth.route');


//create express app
const app = express();

//middleware
app.use(express.json()); //parse json bodies

//routes
app.use('/api/auth', authRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("listening on port 4000");
});

