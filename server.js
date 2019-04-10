require('dotenv').config({ debug: process.env.debug })
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let syncOptions = { force: false }

if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true
}

// Hello this is my big commit change Shrublord for president - I'll drink to Shrublord. 

// api routes will go here eventually

// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 Listening on Port ${PORT}`)
  })
})