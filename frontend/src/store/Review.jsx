import React, { createContext, useState, useContext, useEffect } from 'react'

const ReviewsContext = createContext()

export const useReviews = () => useContext(ReviewsContext)

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/reviews`)
      if (!response.ok) throw new Error('Failed to fetch reviews')
      const fetchedReviews = await response.json()
      setReviews(fetchedReviews)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const addReview = async (reviewData) => {
    try {
      const response = await fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      })
      if (!response.ok) throw new Error('Failed to post review')
      await fetchReviews()
    } catch (error) {
      console.error('Error posting review:', error)
    }
  }

  return (
    <ReviewsContext.Provider value={{ reviews, addReview, fetchReviews }}>
      {children}
    </ReviewsContext.Provider>
  )
}
