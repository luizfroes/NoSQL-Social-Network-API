const { Thought } = require("../../models");

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
    const { thoughtText, username } = req.body;

    const thought = await Thought.create({ thoughtText, username });

    res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought" });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const { thoughtText, username } = req.body;

    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      thoughtText,
      username,
    });

    res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought" });
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
