const mongoose = require("mongoose");

const { User, Thought } = require("../models");

const users = require("./data/users");
const thoughts = require("./data/thoughts");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    // Step 1 seed all thoughts
    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const thoughtsFromDb = await Thought.find({});

    // Step 2 map through the thoughts and link each thought the specific user
    thoughtsFromDb.forEach((thought) => {
      const username = thought.username;

      const thoughtId = thought._id.toString();

      const user = users.find((user) => user.username === username);

      user.thoughts = [...user.thoughts, thoughtId];
    });

    // Step 3 seed all users

    await User.deleteMany({});
    await User.insertMany(users);

    const usersFromDb = await User.find({});

    const userIdsArray = usersFromDb.map((user) => {
      idsArray = user._id.toString();

      return idsArray;
    });

    // Step 5 seed friends with users
    const friendsPromises = usersFromDb.map(async (user) => {
      // update operation on the friends and push it into the friends array
      const shuffledUserIds = userIdsArray.sort(() => 0.5 - Math.random());

      const slicedArray = shuffledUserIds.slice(
        Math.floor(Math.random() * shuffledUserIds.length)
      );

      const friends = slicedArray.filter(
        (userId) => userId !== user._id.toString()
      );

      await User.findByIdAndUpdate(user._id, { friends });
    });

    console.log("[INFO]: Successfully seeded users");

    // await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
