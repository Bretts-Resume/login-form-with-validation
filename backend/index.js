const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Example credentials
  if (email === "test@example.com" && password === "password123") {
    return res.json({ success: true, message: "Login successful" });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});
