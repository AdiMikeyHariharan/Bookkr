const express = require('express');

const app = express();

app.get('/endpoint',(req,res)=>{
    res.json({noob : "DineshPrasath"});
});

app.listen(3000,()=>{
    console.log("Server Listening on port 3000")
})