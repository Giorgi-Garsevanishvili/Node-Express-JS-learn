const {StatusCodes} = require('http-status-codes')

const getAllJobt = (req, res) => {
  res.send('get all jobs')
}

const getJob = (req, res) => {
  res.send('get Job')
}

const createJob = (req, res) => {
  res.send('create job')
}
const updateJob = (req, res) => {
  res.send('update job')
}
const deleteJob = (req, res) => {
  res.send('delete job')
}
module.exports = {
  getAllJobt,
  getJob,
  deleteJob,
  updateJob,
  createJob
}