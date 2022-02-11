const { User } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("thoughts");

    res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("thoughts");

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.create({ username, email });

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const { username, email } = req.body;

    const user = await User.findByIdAndUpdate(userId, { username, email });

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete(userId);

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete user" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
