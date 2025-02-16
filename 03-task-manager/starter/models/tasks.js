const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be entered"],
    trim: true,
    maxlength: [20, "name must be less than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model("Task", TaskSchema);
