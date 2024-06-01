import React, { useState } from 'react'
import Modal from './Modal'
import { useMealStats } from '../store/Meal'
import { toast } from 'react-toastify'

function CalorieInput({ title, user, onMealChanged }) {
  const { addMeal } = useMealStats()
  const [isModalOpen, setModalOpen] = useState(false)
  const [mealType, setMealType] = useState(title)
  const [meal, setMeal] = useState('')
  const [quantity, setQuantity] = useState('')
  const [kcal, setKcal] = useState('')
  const [protein, setProtein] = useState('')
  const [fats, setFats] = useState('')
  const [carbs, setCarbs] = useState('')

  // Handling input changes
  const handleMealChange = (e) => setMeal(e.target.value)
  const handleQuantityChange = (e) => setQuantity(e.target.value)
  const handleKcalChange = (e) => setKcal(e.target.value)
  const handleProteinChange = (e) => setProtein(e.target.value)
  const handleFatsChange = (e) => setFats(e.target.value)
  const handleCarbsChange = (e) => setCarbs(e.target.value)
  const handleMealTypeChange = (e) => setMealType(e.target.value)

  const handleSubmit = async () => {
    if (!meal || !quantity || !kcal || !protein || !fats || !carbs) {
      alert('Please complete all fields.')
      return
    }

    const mealData = {
      type: mealType,
      meal: meal,
      quantity: parseInt(quantity, 10),
      totalKcal: parseInt(kcal, 10) * parseInt(quantity, 10),
      totalProtein: parseInt(protein, 10) * parseInt(quantity, 10),
      totalFats: parseInt(fats, 10) * parseInt(quantity, 10),
      totalCarbs: parseInt(carbs, 10) * parseInt(quantity, 10),
      userId: user.id,
    }

    await addMeal(mealData)
    setModalOpen(false)
    toast.success('Meal was added!')
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="text-white bg-green-600 px-4 py-2 rounded-xl"
        >
          Add Meal
        </button>
      </div>
      <div className="my-4 rounded w-full h-0.5 opacity-75 bg-gray-200"></div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        header="Add Meal"
        body={
          <>
            <div>
              <label
                htmlFor="HeadlineAct"
                className="block text-sm font-medium text-gray-900"
              >
                Meal Type
              </label>
              <select
                value={mealType}
                onChange={handleMealTypeChange}
                id="HeadlineAct"
                className="mb-5 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="Meal"
                className="block text-xs font-medium text-gray-700"
              >
                Meal
              </label>
              <input
                type="text"
                id="Meal"
                value={meal}
                onChange={handleMealChange}
                placeholder="Eg. Eggs"
                className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Quantity"
                className="block text-xs font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                id="Quantity"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Eg. 2"
                className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Kcal"
                className="block text-xs font-medium text-gray-700"
              >
                Kcal (per portion)
              </label>
              <input
                type="number"
                id="Kcal"
                value={kcal}
                onChange={handleKcalChange}
                placeholder="Eg. 120"
                className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 mb-5">
                <label
                  htmlFor="Protein"
                  className="block text-xs font-medium text-gray-700"
                >
                  Protein (per portion)
                </label>
                <input
                  type="number"
                  id="Protein"
                  value={protein}
                  onChange={handleProteinChange}
                  placeholder="Eg. 100"
                  className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
              <div className="col-span-1 mb-5">
                <label
                  htmlFor="Fats"
                  className="block text-xs font-medium text-gray-700"
                >
                  Fats (per portion)
                </label>
                <input
                  type="number"
                  id="Fats"
                  value={fats}
                  onChange={handleFatsChange}
                  placeholder="Eg. 25"
                  className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
              <div className="col-span-1 mb-5">
                <label
                  htmlFor="Carbs"
                  className="block text-xs font-medium text-gray-700"
                >
                  Carbs (per portion)
                </label>
                <input
                  type="number"
                  id="Carbs"
                  value={carbs}
                  onChange={handleCarbsChange}
                  placeholder="Eg. 87"
                  className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-2 bg-green-500 w-full py-2 text-white rounded-lg"
            >
              Add
            </button>
          </>
        }
      />
    </div>
  )
}

export default CalorieInput
