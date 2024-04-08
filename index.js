// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define MongoDB credentials
const username = "chaitu2";
const password = "kTebBmuADc2aRJTE";

// MongoDB connection string
const uri = `mongodb+srv://${username}:${password}@chaitu2.hyhcsdh.mongodb.net/myDatabase?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

// Define schema for your data
const Schema = mongoose.Schema;
const userSchema = new Schema({
    Category: String,
    Amount: Number,
    Info: String,
    Date: Date
});

// Create a model based on the schema
const UserModel = mongoose.model('User', userSchema);

// Define routes

// Add route
app.post("/add", (req, res) => {
    const { category_select, amount_input, info, date_input } = req.body;

    // Create a new user document based on the model
    const newUser = new UserModel({
        Category: category_select,
        Amount: amount_input,
        Info: info,
        Date: date_input
    });

    // Save the new user document to the database

});

// Redirect to index.html
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    });
    return res.redirect('index.html');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
