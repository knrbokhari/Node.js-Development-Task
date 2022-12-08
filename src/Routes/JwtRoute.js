const { getJwtToken } = require("../Controllers/JwtControllers");

const router = require("express").Router();

// get jwt token
router.get('/', getJwtToken)

const configureJwtRoutes = (app) => {
    app.use("/api/jwt_token", router);
};
  
module.exports = configureJwtRoutes;