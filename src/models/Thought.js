const { Schema, model } = require("mongoose");

const formatDate = require("../utils/util");

const reactions = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
  reactions: [reactions],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
  },
});

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schema);

module.exports = Thought;
