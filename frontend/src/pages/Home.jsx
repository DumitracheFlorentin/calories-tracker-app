import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'
import Navigation from '../components/Navigation'
import Stats from '../components/Stats'
import InputList from '../components/InputList'
import { MealStatsProvider } from '../store/Meal'

function Home() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (!user && !isLoading) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <MealStatsProvider>
      <section className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Navigation />
          <Stats />
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <InputList title="Breakfast" />
            <InputList title="Snack" />
            <InputList title="Lunch" />
            <InputList title="Dinner" />
          </div>
        </div>
      </section>
    </MealStatsProvider>
  )
}

export default Home
