const { User, Thought } = require("../models");
/* try catch block for copy and paste
try {
} catch (err) {
  res.status(500).json(err);
}
*/
module.exports = {
  async getUser(req, res) {
    try {
      const userData = await User.find().populate("thoughts");
      // TODO: fix not populating thoughts
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId });

      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
