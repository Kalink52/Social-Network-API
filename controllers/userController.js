const { User } = require("../models");
/* try catch block for copy and paste
try {
} catch (err) {
  res.status(500).json(err);
}
*/

module.exports = {
  async getUser(req, res) {
    try {
      const userData = await User.find();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId })
        .populate("friends")
        .populate("thoughts");
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // TODO: BONUS remove a user's associated thoughts when deleted.
  async deleteUser(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.userId });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          username: req.body.username,
          email: req.body.email,
          thoughts: req.body.thoughts,
          friends: req.body.friends,
        }
      );
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
