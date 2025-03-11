const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const normalizedEmail = req.body.email.toLowerCase();
  const { password } = req.body;

  if (!normalizedEmail || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    throw new UnauthenticatedError("Bad Credentials 1");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Bad Credintials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  login,
  register,
};
