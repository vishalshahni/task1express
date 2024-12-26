const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})

app.use((req,res,next)=>{
    res.send('<h1> This is the Homepage</h1>');
})

app.listen(3000);