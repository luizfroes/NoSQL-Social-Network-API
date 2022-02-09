const { Router } = require("express");

const {
  createFriend,
  deleteFriendById,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/friends/:friendId", createFriend);
router.delete("/friends/:friendId", deleteFriendById);

module.exports = router;
