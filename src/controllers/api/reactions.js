const { Thought } = require("../../models");

const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const reaction = req.body;

    if (reaction) {
      const newReaction = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: { reactions: reaction },
        },
        { returnDocument: "after" }
      );

      return res.json({ success: true, data: newReaction });
    }
    return res.status(400).json({
      success: false,
      error: "Missing reaction body and username.",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction." });
  }
};

const deleteReactionById = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    const deletedReaction = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { reactionId } },
      },
      { returnDocument: "after" }
    );
    return res.json({ success: true, data: deletedReaction });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction." });
  }
};

module.exports = { createReaction, deleteReactionById };
