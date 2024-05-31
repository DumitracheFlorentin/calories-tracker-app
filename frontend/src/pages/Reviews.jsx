import React from 'react'
import Navigation from '../components/Navigation'
import ReviewsList from '../components/Reviews'
import { ReviewsProvider } from '../store/Review'

function Reviews() {
  return (
    <ReviewsProvider>
      <section className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Navigation />
          <ReviewsList />
        </div>
      </section>
    </ReviewsProvider>
  )
}

export default Reviews
