const router = require("express").Router();
const {getUser} = require("../../controllers/userController")
// /api/users
router.route("/").get(getUser).post();

module.exports = router;
