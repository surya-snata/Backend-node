// Import express
const express = require("express");
require("dotenv").config();
const app = express();
const { readData, writeData } = require("./customFunction");

// Middlewares
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await readData(); // all users
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Post a user
app.post("/user", async (req, res) => {
  try {
    const { id, name, age } = req.body;
    const newUser = { id, name, age };
    const users = await readData(); // all users
    users.push(newUser);
    await writeData(users);
    res.json(newUser);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
  }
});

// Put a user
app.put("/contact", (req, res) => {
  res.send("PUT Request Called");
});

// How to find query in URL
app.get("/query", (req, res) => {
  const { movie } = req.query;
  res.send(`Your query is ${movie} `);
});

// How to find params in URL
app.get("/params/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Your params id is ${id}`);
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await readData(); // all users
    const index = users.findIndex((user) => user.id === parseInt(id));
    if (index !== -1) {
      users.splice(index, 1);
      await writeData(users); // write data to file
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
  }
});

// Start the express server
const port = process.env.PORT;
const PORT = port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
