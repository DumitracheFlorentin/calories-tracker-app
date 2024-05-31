const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    meal: { type: String, required: true },
    quantity: { type: Number, required: true },
    kcal: { type: Number, required: true },
    protein: { type: Number, required: true },
    fats: { type: Number, required: true },
    carbs: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
)

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal
