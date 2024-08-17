const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { getMaxListeners } = require("../models/Thought");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Dropping tables if exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
    console.log("collection dropped");
  }

  //   const reactionSchema = await Reaction.create({
  //     reactionBody: "asdasdasdadasda",
  //     username: "micah",
  //   });

  const thoughtData = await Thought.create({
    thoughtText: "Thought Text goes here",
    reactions: [
      { reactionBody: "wrwerwerwerwer", username: "micah" },
      { reactionBody: "asdasdasdadasda", username: "micah" },
    ],
  });

  const userData = await User.create(
    {
      username: "kalink",
      email: "irish@gmail.com",
      thoughts: [],
      friends: []
    },
    {
      username: "micah",
      email: "micah@gmail.com",
      thoughts: [],
      friends: []
    }
  );

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
