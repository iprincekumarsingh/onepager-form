const express = require("express");
const app = express();
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
const Form = require("./models/form");

require("dotenv").config();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// cors middleware
app.use(cors());

// morgan middleware
app.use(morgan("tiny"));


app.post("/save", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check for duplicates based on email and phone
    const existingEmail = await Form.findOne({ email });
    const existingPhone = await Form.findOne({ phone });

    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists." });
    }

    if (existingPhone) {
      return res.status(400).json({ error: "Phone number already exists." });
    }

    // No duplicates found, proceed to save the data
    const formData = new Form({ name, email, phone });
    await formData.save();

    return res.json({ message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An internal server error occurred." + error });
  }
});

// ... Other routes and server setup ...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/u/regs", async (req, res) => {
})

// normal testing route
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
