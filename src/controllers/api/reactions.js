const createReaction = (req, res) => {
  res.send("createReaction");
};

const deleteReactionById = (req, res) => {
  const { thoughtId, reactionId } = req.params;
  console.log(thoughtId);
  console.log(reactionId);
  res.send("deleteReactionById");
};

module.exports = {
  createReaction,
  deleteReactionById,
};
