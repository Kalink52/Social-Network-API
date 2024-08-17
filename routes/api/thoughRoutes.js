const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);
router.route("/:thoughtId").get(getSingleThought, deleteThought, updateThought);

module.exports = router;
