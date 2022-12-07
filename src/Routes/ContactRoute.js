const router = require("express").Router();

// router 

const configureContactRoutes = (app) => {
    app.use("/address", router);
  };
  
module.exports = configureContactRoutes;