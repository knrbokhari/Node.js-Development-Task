const express = require("express");
const cors = require("cors");
const app = express();

const configure = require("./Routes");
const  handleError  = require("./Middleware/handleError");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configure(app)

app.get('/', (req, res) => {
  res.send("Server running")
})

app.use(handleError);

module.exports = { app };
