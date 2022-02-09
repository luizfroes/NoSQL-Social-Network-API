const { Router } = require("express");

const router = Router({ mergeParams: true });

router.post("/friends/:friendId", createFriend);
router.delete("/friends/:friendId", deleteFriendById);

module.exports = router;
