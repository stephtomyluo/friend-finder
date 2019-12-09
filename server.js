const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  