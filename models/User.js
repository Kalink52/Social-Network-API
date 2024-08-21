const { Schema, model, default: mongoose } = require("mongoose");
const { Thought } = require("./Thought");

// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   todo Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   todo Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true }, //?
    email: { type: String, require: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  {
    id: true,
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual("friendCount").get(function () {
  if (this.friends.length !== 0) {
    return `You have ${this.friends.length} friends`;
  }
  return "you have no friends";
});

const User = model("user", userSchema);

module.exports = User;
