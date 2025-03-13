const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobt = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort("createdAt");
  if (!jobs) {
    throw new NotFoundError(` No jobs to display`);
  }
  res.status(StatusCodes.OK).json({ JOBS: jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const {
    user: { userID },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userID });
  if (!job) {
    throw new NotFoundError(` No job to display with id: ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  
  try {
    
    const {
      body: { company, position },
      user: { userID },
      params: { id: jobId },
    } = req;
    
    const job = await Job.findOneAndUpdate(
      { _id: jobId, createdBy: userID },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    
    if (!job) {
      throw new NotFoundError(` No job to display with id: ${jobId}`);
    }
    
    if (company === "" || position === "") {
      throw new BadRequestError("company or position fileds cant be empty");
    }
    
    res.status(StatusCodes.OK).json({ job });
  } catch (error) {
     throw new BadRequestError(error.message)
}
}

const deleteJob = async (req, res) => {
  const {
    user: { userID },
    params: { id: jobId },
  } = req;

  const job = await Job.findOneAndDelete({_id: jobId, createdBy: userID})
  if (!job) {
    throw new NotFoundError(` No job to display with id: ${jobId}`);
  }
  res.status(StatusCodes.OK).json({msg: `job with id:${jobId} succesfully deleted`})
};

module.exports = {
  getAllJobt,
  getJob,
  deleteJob,
  updateJob,
  createJob,
};
