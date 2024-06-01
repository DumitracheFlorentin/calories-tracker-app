// src/components/Stats.jsx
import React from 'react'
import { useMealStats } from '../store/Meal'

function Stats() {
  const { stats } = useMealStats()
  const currentDate = new Date().toLocaleDateString('en-US')

  return (
    <section className="flex flex-col justify-center items-center w-full mt-5">
      <span className="whitespace-nowrap rounded-full bg-purple-100 mt-5 px-2.5 py-0.5 text-sm text-purple-700">
        Today: {currentDate}
      </span>
      <div className="w-full h-[25rem] rounded-xl px-10 my-5 grid grid-cols-3 gap-10">
        <div className="col-span-3 flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl">
          <span className="font-medium">Calories</span>
          <span>{stats?.calories} kcal</span>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl">
          <span className="font-medium">Protein</span>
          <span>{stats?.protein}g</span>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl">
          <span className="font-medium">Fats</span>
          <span>{stats?.fats}g</span>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl">
          <span className="font-medium">Carbs</span>
          <span>{stats?.carbs}g</span>
        </div>
      </div>
    </section>
  )
}

export default Stats
