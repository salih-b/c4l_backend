const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets.js");

module.exports = (req, res, next) => {
  // tokens are normally sent as the Authorization header
  console.log( "is there a header???", req.headers);
  const token = req.headers.authorization;

  const secret = secrets.jwtSecret;
 console.log('in middleware :)', token);
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      // if everything is good with the token, the error will be undefined
      if (error) {
        res.status(401).json({ message: "Invalid Credentials, please login" });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "Missing token, Please provide credentials" });
  }
};