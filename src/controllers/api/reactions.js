const { Thought } = require("../../models");

const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const newReaction = req.body;

    const { reactions } = await Thought.findById(thoughtId);

    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      reactions: [...reactions, newReaction],
    });

    console.log(thought);

    res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};

const deleteReactionById = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    const { reactions } = await Thought.findById(thoughtId);

    const newThoughts = reactions.filter(
      (thought) => thought != thoughtId.toString()
    );

    const newThought = await Thought.findByIdAndUpdate(thoughtId, {
      reactions: [...newThoughts],
    });

    res.json({ success: true, data: newThought.reactions });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = {
  createReaction,
  deleteReactionById,
};
