const express = require("express");
const router = express.Router();
const User = require("../models/user");

// CREATE
router.post("/user", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// READ
router.get("/user", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE
router.put("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
});

// DELETE
router.delete("/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({
    message: "User Deleted"
  });
});

module.exports = router;