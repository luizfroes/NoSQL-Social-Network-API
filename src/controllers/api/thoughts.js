const { Thought, User } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});

    res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const thought = await Thought.findById(thoughtId);

    res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const createThoughts = async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;

    if (thoughtText && username && userId) {
      const newThought = await Thought.create({
        thoughtText,
        username,
        userId,
      });

      await User.findByIdAndUpdate(
        { _id: userId },
        { $push: { thoughts: newThought._id } }
      );

      return res.json({ success: true, data: newThought });
    }

    return res.status(400).json({
      success: false,
      error: "Missing thought text, username, and user id.",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought." });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params.id;
    const { thoughtText } = req.body;

    if (thoughtText) {
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $set: {
            thoughtText,
          },
        },
        { returnDocument: "after" }
      );

      return res.json({ success: true, data: updatedThought });
    }
    return res.status(400).json({
      success: false,
      error: "Missing thought text.",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update thought." });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const thought = await Thought.findByIdAndDelete(thoughtId);

    res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete thought" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThoughts,
  updateThoughtById,
  deleteThoughtById,
};
