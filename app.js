const express = require("express");
const app = express();
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
    const { name, email, phone, selectedCountryCode } = req.body;


    console.log(selectedCountryCode);


    // contactinate the phone number with the country code with a + sign
    const phoneNumber = selectedCountryCode + phone;

    // No duplicates found, proceed to save the data
    const formData = new Form({ name, email, phone: phoneNumber });
    await formData.save();

    return res.json({ message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An internal server error occurred." + error });
  }
});




// normal testing route
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
