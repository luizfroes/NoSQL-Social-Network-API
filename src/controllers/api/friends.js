const createFriend = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.create({ username, email });

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const deleteFriendById = async (req, res) => {
  const { userId, friendId } = req.params;
  res.send("deleteFriendById");
};

module.exports = {
  createFriend,
  deleteFriendById,
};
