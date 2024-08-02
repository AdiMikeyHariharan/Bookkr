import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './User.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use(express.json()); // Middleware to parse JSON bodies

const URI = process.env.URI;

mongoose.connect(URI)
    .then((result) => console.log("DB CONNECTED ! !"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    console.log("Hello Bhai");
    res.send("Hello from the server!"); // Optionally send a response
});

app.post('/signup', async (req, res) => {
    console.log(req.body); // Log the request body
    
    const { username, emailId, password } = req.body;
    console.log(emailId);
    try {
        // Create a new user instance
        const user = new User({
            username: username,
            email: emailId,
            password: password
        });

        // Save the user to the database
        await user.save();

        // Send success response
        console.log("User saved Successfully");
        res.status(200).json({ message: 'User signed up successfully!' });
    } catch (err) {
        // Log and send error response
        console.error(err);
        res.status(500).json({ message: 'Error signing up user' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server Listening On ${process.env.PORT}`);
});
