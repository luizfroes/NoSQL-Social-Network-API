const { Router } = require("express");

const {
  createReaction,
  deleteReactionById,
} = require("../../controllers/api/reactions");

const router = Router({ mergeParams: true });

router.post("/reactions/:reactionId", createReaction);
router.delete("/reactions/:reactionId", deleteReactionById);

module.exports = router;
