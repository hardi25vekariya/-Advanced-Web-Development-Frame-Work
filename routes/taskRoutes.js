const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

const validateTaskId = require("../middleware/validateTaskId");

// GET
router.get("/", taskController.getTasks);

// POST
router.post("/", taskController.createTask);

// PUT
router.put("/:id", validateTaskId, taskController.updateTask);

// DELETE
router.delete("/:id", validateTaskId, taskController.deleteTask);

module.exports = router;