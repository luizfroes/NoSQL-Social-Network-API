const { Schema, isValidObjectId } = require("mongoose");

const { format } = require("date-fns");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  reactionBody: {
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
  reactions: [Reaction],
};

const schema = new Schema(reactionSchema);

module.exports = schema;
