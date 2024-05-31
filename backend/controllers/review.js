const Review = require('../models/review')

exports.add = async (req, res) => {
  const { userId, rating, description } = req.body
  try {
    const newReview = await Review.create({
      rating,
      description,
      user: userId,
    })
    res.status(201).json(newReview)
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error })
  }
}

exports.get = async (req, res) => {
  try {
    const reviews = await Review.find().populate('user', 'email')
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error })
  }
}
