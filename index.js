const express = require("express");

// set up express
const app = express();

// listen port request
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
