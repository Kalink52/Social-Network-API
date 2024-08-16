const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//TODO Enviromental variable
const PORT = 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//TODO app routes
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API Server is running on http://localhost:${PORT}`);
  });
});
