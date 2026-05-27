const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model(
  'Interview',
  interviewSchema
)