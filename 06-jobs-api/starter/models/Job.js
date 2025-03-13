const { required } = require("joi");
const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please Provide Company Name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please Provide Position"],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: {
      values: ["interview", "declined", "pending"],
      message: "{VALUE} is not a valid status. Please choose from 'interview', 'declined', or 'pending'."
    },
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobsSchema);
