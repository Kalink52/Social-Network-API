const { Thought } = require("../models");

//TODO Populate
module.exports = {
  async getThought(req, res) {
    try {
      const thoughtData = await Thought.find();
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          thoughtText: req.body.thoughtText,
          username: req.body.username,
          reactions: req.body.reactions,
        }
      );
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
