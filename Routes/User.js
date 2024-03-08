const express = require('express');


const User = express.Router();
User.post("./signup");

export default User;