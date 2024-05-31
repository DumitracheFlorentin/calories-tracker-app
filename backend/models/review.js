const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    likes: { type: String, required: false, default: 0 },
  },
  { timestamps: true },
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
