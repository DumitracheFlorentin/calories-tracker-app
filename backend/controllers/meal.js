const Meal = require('../models/meal')

exports.addMeal = async (req, res) => {
  const {
    type,
    meal,
    quantity,
    totalKcal,
    totalProtein,
    totalFats,
    totalCarbs,
    userId,
  } = req.body
  try {
    const newMeal = await Meal.create({
      type,
      meal,
      quantity,
      kcal: totalKcal,
      protein: totalProtein,
      fats: totalFats,
      carbs: totalCarbs,
      user: userId,
    })
    res.status(201).json(newMeal)
  } catch (error) {
    res.status(500).json({ message: 'Error adding meal', error })
  }
}

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find().populate('user', 'email')
    res.json(meals)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meals', error })
  }
}

exports.getMealsByUserId = async (req, res) => {
  const { userId } = req.params
  try {
    const meals = await Meal.find({ user: userId }).populate('user', 'email')
    res.json(meals)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meals for user', error })
  }
}

exports.removeMeal = async (req, res) => {
  const { mealId } = req.params
  try {
    const removedMeal = await Meal.deleteOne({ _id: mealId })
    res.json(removedMeal)
  } catch (error) {
    res.status(500).json({ message: 'Error deleting meal', error })
  }
}
