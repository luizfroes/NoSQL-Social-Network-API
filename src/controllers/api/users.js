const { User, Thought } = require("../../models");

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

    if (username && email) {
      const newUser = await User.create({ username, email });
      return res.json({ success: true, data: newUser });
    }

    return res.status(400).json({
      success: false,
      error: "Please provide the username and email.",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user." });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;
    if (username && email) {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            username,
            email,
          },
        },
        { returnDocument: "after" }
      );

      return res.json({ success: true, data: updatedUser });
    }
    return res.status(400).json({
      success: false,
      error: "Please provide the username and email.",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update user." });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete(userId);

    await Thought.deleteMany({ username: user.username });

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
