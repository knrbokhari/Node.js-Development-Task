const express = require("express");
const cors = require("cors");
const app = express();

const configure = require("./Routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configure(app)

app.get('/', (req, res) => {
  res.send("Server running")
})

module.exports = { app };
