const
   express = require('express'),
   app = express(),
   PORT = process.env.PORT || 4321,
   mongoose = require("mongoose")

require("dotenv").config()
require("./db")()

app.use(express.json());

// schema
const UsersSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
})

// data
const
   user = { name: "avi", email: "a@a", password: "1234" }

// models
const
   UserModel = new mongoose.model("Users", UsersSchema)


// functions
const getUsers = async () => await UserModel.find()

// test area
// getUsers().then(res => console.log(res))

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));