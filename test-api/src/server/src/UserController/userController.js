require('../DataBase/mongo');
const express = require('express');
const users  = require('../DataBase/Schema');

const app = express();
app.use(express.json());
app.post("/create",async(req,resp)=>{
  let data = Blog(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.listen(5000);