const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Schema
// user Schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    age: {
      type: Number,
      required: true,
    },
    // dob: {
    //   type: Date,
    //   required: true,
    // },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello this is home page");
});

app.post("/create", async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    res.status(400).json({ message: "Please fill the details" });
  }
  try {
    await User.create({ name, age });
    res.status(200).json({ message: "Successfully created" });
  } catch (error) {
    res.status(500).json({ message: "Error!" });
  }
});

app.get("/get", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: "Error!" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
