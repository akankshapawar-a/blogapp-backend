const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../Module/Module.js'); 


const userRouter = express.Router();

userRouter.post("/Signup",async (req, res) => {
    const { email, password } = req.body;
    const hashpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ email, password: hashpassword });
  
    try {
      await newUser.save();
      res.status(201).json("User Created Successfully");
    } catch (error) {
      res.status(500).json("Something went wrong");
    }
  }
  );

 

module.exports = userRouter;