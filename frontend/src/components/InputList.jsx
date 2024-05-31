import React from 'react'
import CalorieInput from './CalorieInput'
import { useAuth } from '../store/Auth'
import { useMealStats } from '../store/Meal'

function InputList({ title }) {
  const { user } = useAuth()
  const { meals, fetchMeals, deleteMeal } = useMealStats()

  const filteredMeals = meals.filter((meal) => meal.type === title)

  async function deleteMealHandler(mealId) {
    await deleteMeal(mealId)
  }

  return (
    <div>
      <CalorieInput title={title} user={user} onMealChanged={fetchMeals} />
      <div>
        {filteredMeals.map((meal) => (
          <div
            key={meal._id}
            className="flex justify-between items-center mb-2"
          >
            <h3>{meal.quantity + ' ' + meal.meal}</h3>
            <span>{meal.kcal} kcal</span>
            <button
              onClick={() => deleteMealHandler(meal._id)}
              className="bg-red-400 text-white p-1 px-2 rounded-md font-bold"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputList
