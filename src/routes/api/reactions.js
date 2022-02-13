const { Router } = require("express");

const {
  createReaction,
  deleteReactionById,
} = require("../../controllers/api/reactions");

const router = Router({ mergeParams: true });

router.post("/reactions", createReaction);
router.delete("/reactions/:reactionId", deleteReactionById);

module.exports = router;
