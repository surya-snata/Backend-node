const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { connection } = require("./db.js");
const { UserModel } = require("./model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Api is working" });
});

app.post("/create", async (req, res) => {
  const { name, age, legal, city, language } = req.body;
  if (!name || !age || !legal || !city || !language) {
    res.status(400).json({ message: "Please fill the details" });
  }
  try {
    await UserModel.create({ name, age, legal, city, language });
    res.status(200).json({ message: "Successfully created" });
  } catch (error) {
    res.status(500).json({ message: "Error!" });
  }
});

// Update a user
app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await UserModel.findOne({ _id: id });
    if (!userExist) {
      res.status(400).json({ message: "User not found" });
    }
    const userUpdate = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(userUpdate);
  } catch (error) {
    res.status(500).json({ message: "Error Occured" });
  }
});

// Delete a user
// app.delete("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const userExist = await UserModel.findById({ _id: id });
//     if (!userExist) {
//       res.status(400).json({ message: "User not found" });
//     }
//     await UserModel.findByIdAndDelete(id);
//     res.status(201).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error Occured" });
//   }
// });

const port = process.env.PORT_NO;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Succefully connected to mongodb");
  } catch (error) {
    console.log("Connection failed");
    console.log(error);
  }
  console.log(`Server is running on port ${port}`);
});
