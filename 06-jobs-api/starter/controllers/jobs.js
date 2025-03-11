const { StatusCodes } = require("http-status-codes");

const getAllJobt = (req, res) => {
  res.send("get all jobs");
};

const getJob = (req, res) => {
  res.send("get Job");
};

const createJob = (req, res) => {
  const token = req.headers.authorization
  res.status(StatusCodes.OK).json({user:req.user, token});
};
const updateJob = (req, res) => {
  res.send("update job");
};
const deleteJob = (req, res) => {
  res.send("delete job");
};
module.exports = {
  getAllJobt,
  getJob,
  deleteJob,
  updateJob,
  createJob,
};
