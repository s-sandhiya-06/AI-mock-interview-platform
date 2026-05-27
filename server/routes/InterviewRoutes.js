const express = require('express')

const router = express.Router()

const Interview = require('../models/Interview')

router.post('/save', async (req, res) => {

  try {

    const { title, score } = req.body

    const newInterview = new Interview({
      title,
      score
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

router.get('/all', async (req, res) => {

  try {

    const interviews = await Interview.find()
      .sort({ date: -1 })

    res.json(interviews)

  } catch (error) {

    res.status(500).json({
      message: 'Server Error'
    })
  }
})

module.exports = router