const { User } = require("../../models");

const createFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const { friends } = await User.findById(userId);

    const hasFriend = friends.find((friend) => friend.toString() == friendId);
    if (!hasFriend) {
      const newUser = await User.findByIdAndUpdate(userId, {
        friends: [...friends, friendId],
      });

      return res.json({ success: true, data: newUser.friends });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "Friend already exists" });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to add friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add friend" });
  }
};

const deleteFriendById = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const { friends } = await User.findById(userId);

    const newFriends = friends.filter(
      (friend) => friend != friendId.toString()
    );

    const newUser = await User.findByIdAndUpdate(userId, {
      friends: [...newFriends],
    });

    res.json({ success: true, data: newUser.friends });
  } catch (error) {
    console.log(`[ERROR]: Failed to add friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add friend" });
  }
};

module.exports = {
  createFriend,
  deleteFriendById,
};
