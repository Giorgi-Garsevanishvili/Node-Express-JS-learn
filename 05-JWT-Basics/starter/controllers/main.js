const jwt = require("jsonwebtoken");
const { BadRequsetError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequsetError("plese enter name and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: `user created for mr/ms ${username}, with token:`, token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 99);
  console.log(req.user);

  res
    .status(StatusCodes.OK)
    .json({
      msg: `Hello ${req.user.username}`,
      secret: `Here is requseted secter code ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};
