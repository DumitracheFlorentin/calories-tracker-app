const express = require('express')
const router = express.Router()
const mealController = require('../controllers/meal')

router.post('/', mealController.addMeal)
router.get('/', mealController.getMeals)
router.get('/user/:userId', mealController.getMealsByUserId)
router.delete('/:mealId', mealController.removeMeal)

module.exports = router
