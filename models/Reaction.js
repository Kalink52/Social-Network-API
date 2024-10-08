const { Schema, Types } = require("mongoose");

//TODO
// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, require: true, minLength: 1, maxLength: 280 },
    username: { type: String, require: true },
    createdAt: { type: Date, default: Date.now, get: formateDate },
  },
  {
    id: false,
    toJSON: {
      getters: true,
    },
  }
);

function formateDate(createdAt) {
  return new Date(createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

module.exports = { reactionSchema };
