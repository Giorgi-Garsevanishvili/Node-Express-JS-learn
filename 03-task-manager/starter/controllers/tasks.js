const getAllTasks = (req, res) => {
  res.status(200).send("get all task");
};

const createTask = (req, res) => {
  res.status(200).send(`Create new task`)
}

const getTask = (req, res) => {
  res.status(200).send('get single task')
}

const updateTask = (req, res) => {
  res.status(200).send('update task')
}

const deleteTask = (req, res) => {
  res.status(200).send(`delete task`)
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
