const router = require("express").Router();
const { getUser, getSingleUser } = require("../../controllers/userController");
// /api/users
router.route("/").get(getUser).post();
router.route("/:userId").get(getSingleUser);

module.exports = router;
