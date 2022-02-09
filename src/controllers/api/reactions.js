const createReaction = (req, res) => {
  res.send("createReaction");
};

const deleteReactionById = (req, res) => {
  res.send("deleteReactionById");
};

module.exports = {
  createReaction,
  deleteReactionById,
};
