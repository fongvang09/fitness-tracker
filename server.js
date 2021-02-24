// Initialize the app and create a port
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(logger("dev"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// routes
app.use(require("./routes/api.js"));


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
