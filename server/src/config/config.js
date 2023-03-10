const dotenv = require("dotenv");

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  salt: Number(process.env.SALT),
  PORT: process.env.PORT,
  clientUrl: process.env.CLIENT_URL,
};
