// require depenencies
var express = require('express');

// Create a express server called app
var app = express(); 

// set port for 8080

var PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listenting on PORT: " + PORT);
});
