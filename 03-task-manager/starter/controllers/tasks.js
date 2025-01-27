const getAllTasks = (req, res) => {
  res.status(200).send("get all task");
};

const createTask = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(200).json({ success: true, data: "Please Provide Name" });
  }
  res.status(200).json({ success: true, data: name });
};

const getTask = (req, res) => {
  res.status(200).send("get single task");
};

const updateTask = (req, res) => {
  res.status(200).send("update task");
};

const deleteTask = (req, res) => {
  res.status(200).send(`delete task`);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
