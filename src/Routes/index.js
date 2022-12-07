const configureContactRoutes = require("./ContactRoute");

const configure = (app) => {
    configureContactRoutes(app)
  };
  
module.exports = configure;