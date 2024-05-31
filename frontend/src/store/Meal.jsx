import React, { createContext, useState, useContext, useEffect } from 'react'
import { useAuth } from './Auth'

const MealStatsContext = createContext()

export const useMealStats = () => useContext(MealStatsContext)

export const MealStatsProvider = ({ children }) => {
  const { user } = useAuth()
  const [meals, setMeals] = useState([])
  const [stats, setStats] = useState({
    calories: 0,
    protein: 0,
    fats: 0,
    carbs: 0,
  })

  const fetchMeals = async () => {
    if (!user || !user.id) return
    try {
      const response = await fetch(
        `http://localhost:3000/api/meals/user/${user.id}`,
      )
      if (!response.ok) throw new Error('Failed to fetch meals')
      const fetchedMeals = await response.json()
      setMeals(fetchedMeals)
      calculateStats(fetchedMeals)
    } catch (error) {
      console.error('Error fetching meals:', error)
    }
  }

  const calculateStats = (meals) => {
    const totalStats = meals.reduce(
      (totals, meal) => ({
        calories: totals.calories + meal.kcal,
        protein: totals.protein + meal.protein,
        fats: totals.fats + meal.fats,
        carbs: totals.carbs + meal.carbs,
      }),
      { calories: 0, protein: 0, fats: 0, carbs: 0 },
    )
    setStats(totalStats)
  }

  useEffect(() => {
    fetchMeals()
  }, [user.id])

  const addMeal = async (mealData) => {
    try {
      const response = await fetch('http://localhost:3000/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealData),
      })
      if (!response.ok) throw new Error('Failed to post meal')
      await fetchMeals()
    } catch (error) {
      console.error('Error posting meal:', error)
    }
  }

  const deleteMeal = async (mealId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/meals/${mealId}`,
        {
          method: 'DELETE',
        },
      )
      if (!response.ok) throw new Error('Failed to delete meal')
      await fetchMeals()
    } catch (error) {
      console.error('Error deleting meal:', error)
    }
  }

  return (
    <MealStatsContext.Provider
      value={{ meals, stats, addMeal, fetchMeals, deleteMeal }}
    >
      {children}
    </MealStatsContext.Provider>
  )
}
