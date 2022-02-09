const { Router } = require("express");

const router = Router({ mergeParams: true });

router.post("/reactions/:id", createReaction);
router.delete("/reactions/:id", deleteReactionById);

module.exports = router;