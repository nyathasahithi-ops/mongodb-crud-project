const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Create Task
router.post("/task", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get All Tasks
router.get("/task", async (req, res) => {
  const tasks = await Task.find().populate("userId");
  res.json(tasks);
});

module.exports = router;