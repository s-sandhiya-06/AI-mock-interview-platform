const express = require('express')
const router = express.Router()

const Interview = require('../models/Interview')

router.post('/save', async (req, res) => {
  try {
    const { username, answers } = req.body

    const newInterview = new Interview({
      username,
      answers
    })

    await newInterview.save()

    res.status(201).json({
      message: 'Interview saved successfully'
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server Error'
    })
  }
})

module.exports = router