const express = require('express')
const mongoose = require("mongoose"); 
const dotenv = require('dotenv')
const bcrypt = require("bcrypt"); 
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const apis = require('./src/routes/routes');
const saltRounds = 10; // Number of Salt rounds used in Encryption of the password
const UsersModel = require("./src/schema/userSchema"); // Schema created for the Users

const app = express()




// port from env file
dotenv.config({path:'.env'})
const port = process.env.PORT;
console.log(port)

app.use(cors())

//body parser
app.use(bodyParser.json());

//routes setup
app.use('/', apis);

//Server setup
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})