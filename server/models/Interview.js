const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    answers: [
      {
        question: String,
        answer: String
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Interview', interviewSchema)