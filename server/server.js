import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './User.js';
import cors from 'cors';
import jsonwebtoken from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import cookieAuth from './middleware/cookieAuth.js';


const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    credentials:true,
}));

app.use(express.json({limit:'10mb'})); 
app.use(express.urlencoded({limit:'10mb'}))
app.use(cookieParser());

const URI = process.env.URI;

mongoose.connect(URI)
    .then((result) => console.log("DB CONNECTED ! !"))
    .catch((err) => console.log(err));

    app.post('/signup', async (req, res) => {
        console.log(req.body);
        
        const { username, emailId, password } = req.body;
        const payload = { username, emailId };
        try {
            const user = new User({
                username: username,
                email: emailId,
                password: password,
            });
            
            await user.save()
            const token = jsonwebtoken.sign(payload, process.env.MY_SECRET, { expiresIn: "1h" });
            res.cookie("token", token, {
                maxAge:100000000,
                httpOnly: true,
                secure: false, // Set secure flag in production
                sameSite: 'strict', // Protect against CSRF
                domain:undefined,
            });
    
            // Send response back to client
            res.status(200).json({ message: 'User created successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error signing up user' });
        }
});
app.get('/checkuser/:username',(req,res)=>{
    const {username} = req.params;
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            res.status(200).json({available:false});
            }else{
                res.status(200).json({available:true});
                }
            })
    .catch((err)=>{
        res.status(500)
        console.log(err)
    })
})
app.get('/checkuser',cookieAuth,(req,res)=>{
    const token = req.cookies.token
    const user = jsonwebtoken.verify(token,process.env.MY_SECRET);
    User.findOne({username:user.username})
        .then((user)=>{
            return res.json({permitted:true,image : user.image,username : user.username})
        })
        .catch((err)=>{
            console.log("Error Occurred ! !")
        })
})
app.post('/upload-image',(req,res)=>{
    const token = req.cookies.token
    const {Newimage} = req.body;
    const user = jsonwebtoken.verify(token,process.env.MY_SECRET);
    User.findOneAndUpdate({username:user.username},{$set:{image:Newimage}})
        .then((user)=>{
            return res.status(200);
        })
        .catch((err)=>{
            return res.status(500).json({message : "Internal Server error"})
        })
})
app.listen(process.env.PORT, () => {
    console.log(`Server Listening On ${process.env.PORT}`);
});
