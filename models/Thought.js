const { Schema, model, set } = require("mongoose");
const { reactionSchema } = require("./Reaction");
//TODO

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, require: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: formateDate },
    username: { type: String, require: true },
    reactions: [reactionSchema],
  },
  {
    id: true,
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  if (this.reactions.length !== 0) {
    return `You have ${this.reactions.length} reactions`;
  }
  return "you have no reactions";
});

function formateDate(createdAt) {
  return new Date(createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
