const jwt = require("jsonwebtoken");

exports.getJwtToken = async (req, res) => {
    try {
        // jwt token
        const token = jwt.sign(
            { name: "contunt" },
            process.env.JWTKEY,
            { expiresIn: "1d" }
        );

        res.status(200).json({token, success: true,})
    } catch (e) {
        res.status(400).send(e.message);
    }
}