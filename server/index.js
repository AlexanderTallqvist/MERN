const express = require("express");
require("./services/passport");

// Init our Express app
const app = express();

// Pass our app to our routes (our authRoutes return a function)
require("./routes/authRoutes")(app);

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER UP ON PORT: " + PORT));
