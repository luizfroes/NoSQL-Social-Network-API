const { Schema, model } = require("mongoose");

const thoughts = require("./Thought");

const { validateEmail } = require("../helpers/index");

const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
};

const schema = new Schema(userSchema, {
  toJSON: {
    getters: true,
  },
});

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", schema);

module.exports = User;
