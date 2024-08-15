const { Schema, model, default: mongoose } = require("mongoose");
const { Thought } = require("./Thought");

// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   ! Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   ? Array of `_id` values referencing the `Thought` model

// * `friends`
//   ? Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true }, //?
    email: { type: String, require: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'  }],
    friends: [this],
  },
  {
    id: true,
  }
);

const User = model("user", userSchema);

model.exports = User;
