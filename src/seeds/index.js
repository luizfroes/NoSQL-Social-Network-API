const mongoose = require("mongoose");

const { User, Thought } = require("../models");

const users = require("./data/users");
const thoughts = require("./data/thoughts");

const init = async () => {
  try {
    console.log(users);
    await mongoose.connect("mongodb://localhost:27017/studentStatsDb", {
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

    // Step 4 map through the thoughts and link each thought the specific user (get the username of the thought and find the user object in users from DB and get _id of that user)
    // once you get _id of user, insert the thought _id in to the thoughts array of the user
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
