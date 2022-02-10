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

    // Step 1 seed all users
    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    // Step 2 get all users from DB
    const usersFromDb = await User.find({});

    // Step 3 seed all thoughts
    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const thoughtsFromDb = await Thought.find({});

    // Step 4 map through the thoughts and link each thought the specific user (get the username of the thought and find the user object in users from DB and get _id of that user)
    const newUsers = thoughtsFromDb.map((thought) => {
      const username = thought.username;

      const thoughtId = thought._id.toString();

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thoughtId);

      return user;
    });

    // once you get _id of user, insert the thought _id in to the thoughts array of the user
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
