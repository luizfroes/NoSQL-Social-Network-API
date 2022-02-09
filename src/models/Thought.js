const { Schema, model } = require("mongoose");

const { format } = require("date-fns");

const reactions = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: format(new Date()),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactions],
};

const schema = new Schema(thoughtSchema);

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schema);

module.exports = Thought;
