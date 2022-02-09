const createFriend = (req, res) => {
  res.send("createFriend");
};

const deleteFriendById = (req, res) => {
  res.send("deleteFriendById");
};

module.exports = {
  createFriend,
  deleteFriendById,
};
