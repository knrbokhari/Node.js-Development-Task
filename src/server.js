const { app } = require("./app");
const db = require("./Connection");
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 5000;

app.listen(port, () => {
  db();
  console.log("server running at port", port);
});
