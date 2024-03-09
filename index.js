

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/User.js'); 
const app = express();
const port =5000;


mongoose.connect('mongodb://127.0.0.1:27017/akki').then(()=>{
    console.log("connected to mongoDb");
}).catch((error)=>{
    console.log("Mogodb is failed to connect",error);

})

app.use(cors())
app.use(express.json())
app.use('/api',userRouter)





app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

