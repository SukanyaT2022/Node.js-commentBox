const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  reply: [
    {
      text: {
        type: String,
        required: true,
      },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Comment', commentSchema);
