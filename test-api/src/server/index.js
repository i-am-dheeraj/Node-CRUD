const express = require("express"); // Express Module Import
const mongoose = require("mongoose"); // Mongoose Module Import
const cors = require("cors"); // Cors Module Import
const bcrypt = require("bcrypt"); // bcrypt Module Import
const saltRounds = 10; // Number of Salt rounds used in Encryption of the password
const UsersModel = require("./src/DataBase/UsersSchema"); // Schema created for the Users
const jwt = require('jsonwebtoken')
// Creating app variable to assigning

const app = express();
app.use(express.json()); // The declared variable is using json() from express module
app.use(cors());        // The declared variable will also use cors() from cors module

// Mongoose Connection

mongoose.connect(
    "mongodb+srv://viddeveloper110:1234567890@vidhema-dev.n5rtjjg.mongodb.net/Admin_Panel"
);
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const userData = await UsersModel.findOne({ username: username });
    if (!userData) {
        const salt = await bcrypt.genSalt(saltRounds);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        UsersModel.create(req.body)
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
    }
    else{
        res.json("Username Unavailable");
    }
});

// POST API for Login Authentication

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userData = await UsersModel.findOne({ username: username });
    if (userData) {
        const match = await bcrypt.compare(password, userData.password);
        if (match) {
            const token = await jwt.sign({ userId:userData._id }, 'knauezebdgbuviuegyberjdbvfiuarwjp0232823y8732fui2gu2q', { expiresIn: "24h" });
            res.json({message: "Success",data: userData,token:token});
        } else {
            console.log(match);
            res.json("Username or password is incorrect");
        }
    } else {
        res.json("User not found");
    }
});

app.put("/updateprofile", async(req, res)=>{
    
})
app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});
