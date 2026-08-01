const tasks = require("../data/tasks");

// GET
exports.getTasks = (req, res) => {
    res.status(200).json(tasks);
};

// POST
exports.createTask = (req, res) => {

    const { title, completed } = req.body;

    const task = {
        id: tasks.length + 1,
        title,
        completed
    };

    tasks.push(task);

    res.status(201).json(task);
};

// PUT
exports.updateTask = (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task Not Found"
        });
    }

    task.title = req.body.title;
    task.completed = req.body.completed;

    res.status(200).json(task);
};

// DELETE
exports.deleteTask = (req, res) => {

    const id = Number(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task Not Found"
        });
    }

    tasks.splice(index, 1);

    res.status(200).json({
        message: "Task Deleted Successfully"
    });
};