//8/24/2024
require('dotenv').config();
const express = require('express');



//create express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the application." });
});

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port 4000");
});

