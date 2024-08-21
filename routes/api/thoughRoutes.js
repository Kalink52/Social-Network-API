const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");
const {
  addThoughtReaction,
  deleteThoughtReaction,
} = require("../../controllers/thoughtReactionControllers");

router.route("/").get(getThought).post(createThought);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);
router
  .route("/:thoughtId/reactions")
  .post(addThoughtReaction)
  .delete(deleteThoughtReaction);

module.exports = router;
