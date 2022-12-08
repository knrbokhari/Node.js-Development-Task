const configureContactRoutes = require("./ContactRoute");
const configureJwtRoutes = require("./JwtRoute");

const configure = (app) => {
    configureContactRoutes(app)
    configureJwtRoutes(app)
  };
  
module.exports = configure;