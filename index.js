const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/users");
require("dotenv").config();
const PORT = 8080;
const connectionString = process.env.CONNECTION_URI;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(connectionString);

app.get("/api/users", (req, res) => {
  try {
    const users = async () => {
      const userData = await userModel.find({});
      res.status(200).json(userData)
    };
    users();
  } catch (err) {
    res.json(err)
  }
});

app.get("/api/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel.findById({_id:id})
    .then((user) => res.json(user))
  .catch((err)=> res.json(err))
  
})

app.post("/api/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error.message));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
