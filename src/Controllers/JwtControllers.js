const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/async");

exports.getJwtToken = asyncHandler ( async (req, res) => {
    // jwt token
    const token = jwt.sign(
        { name: "contunt" },
        process.env.JWTKEY,
        { expiresIn: "7d" }
    );

    res.status(200).json({token, success: true})
})